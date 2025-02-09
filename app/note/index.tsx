import { useRef, useState } from "react";
import {
  LayoutChangeEvent,
  PanResponder,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const testData = `
  The sky was an endless stretch of gray, 
  an iron curtain drawn across the heavens,,,cc,, s s,

  allowing neither warmth nor light to penetrate the city below.

  allowing neither warmth nor light to penetrate the city below.
`;

export default function Note() {
  const words = [...testData.matchAll(/[\w'-]+|[.,!?;]|\n+/g)].map(
    (match, index, array) => ({
      id: index,
      text: match[0],
      start: match.index,
      end: match.index + match[0].length - 1,
      type: match[0].includes("\n") ? "newline" : "word",
      newLineCount: match[0].length,
      isBeforePunctuation:
        index < array.length - 1 && /[.,!?;]/.test(array[index + 1][0]),
    })
  );

  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const wordPositions = useRef<
    { id: number; x: number; y: number; width: number; height: number }[]
  >([]);

  const startIndexRef = useRef<number | null>(null);
  const endIndexRef = useRef<number | null>(null);

  // 各単語の座標を保存
  const onWordLayout = (event: LayoutChangeEvent, id: number) => {
    const { x, y, width, height } = event.nativeEvent.layout;
    wordPositions.current = [
      // 違うidの単語の座標はそのまま
      ...wordPositions.current.filter((w) => w.id !== id),
      { id, x, y, width, height },
    ];
  };

  // タッチイベント
  const panResponder = useRef(
    PanResponder.create({
      // イベントを受け取るかどうかの判定
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: (event, gestureState) => {
        // gestureState === ドラッグ開始位置
        const startIdx = getClosestWordIndex(gestureState.x0, gestureState.y0);
        startIndexRef.current = startIdx;
        endIndexRef.current = startIdx;
        setSelectedIndices([startIdx]);
      },
      onPanResponderMove: (event, gestureState) => {
        const endIdx = getClosestWordIndex(
          gestureState.moveX,
          gestureState.moveY
        );
        endIndexRef.current = endIdx;
        updateSelectedRange();
      },
      onPanResponderRelease: () => {
        startIndexRef.current = null;
        endIndexRef.current = null;
      },
    })
  ).current;

  const insets = useSafeAreaInsets();

  // タッチ位置を調節して最も近い単語を探す
  const getClosestWordIndex = (x: number, y: number): number => {
    // 端末によって調整値変える必要あるかも(マジックナンバーやめる)
    const adjustedY = y - (insets.top + 55);
    const adjustedX = x - 20;
    let closestIndex = 0;
    let minDistance = Infinity;

    wordPositions.current.forEach((word) => {
      // 単語の中心点を計算
      const centerX = word.x + word.width / 2;
      const centerY = word.y + word.height / 2;

      // タッチ位置と単語の中心点の距離を計算
      const distance = Math.sqrt(
        (centerX - adjustedX) ** 2 + (centerY - adjustedY) ** 2
      );

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = word.id;
      }
    });

    return closestIndex;
  };

  const updateSelectedRange = () => {
    if (startIndexRef.current !== null && endIndexRef.current !== null) {
      // ドラッグの方向によってmin, maxを決める
      const minIdx = Math.min(startIndexRef.current, endIndexRef.current);
      const maxIdx = Math.max(startIndexRef.current, endIndexRef.current);

      setSelectedIndices(
        Array.from({ length: maxIdx - minIdx + 1 }, (_, i) => minIdx + i)
      );
    }
  };

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      <View style={styles.textContainer}>
        {words.map((word, index) =>
          word.type === "newline" ? (
            <View
              key={word.id}
              style={{ width: "100%", height: word.newLineCount > 1 ? 16 : 1 }}
            />
          ) : (
            <Text
              key={word.id}
              style={[
                styles.mainText,
                { marginRight: word.isBeforePunctuation ? 0 : 4 },
                selectedIndices.includes(index) && styles.selectedWord,
              ]}
              onLayout={(event) => onWordLayout(event, index)}
            >
              {word.text}
            </Text>
          )
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    padding: 20,
  },
  mainText: {
    fontSize: 16,
    color: "#495057",
  },
  textContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  selectedWord: {
    backgroundColor: "#ffeb3b",
  },
});
