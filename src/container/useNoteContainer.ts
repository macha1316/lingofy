import { useCallback, useMemo, useRef, useState } from "react";
import {
  GestureResponderEvent,
  LayoutChangeEvent,
  PanResponder,
  PanResponderGestureState,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type NoteContainerProps = {
  testData: string;
};

export default function useNoteContainer({ testData }: NoteContainerProps) {
  const insets = useSafeAreaInsets();

  const wordPositions = useRef<
    { id: number; x: number; y: number; width: number; height: number }[]
  >([]);

  const startIndexRef = useRef<number | null>(null);
  const endIndexRef = useRef<number | null>(null);
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);

  const words = useMemo(() => {
    return Array.from(testData.matchAll(/[\w'-]+|[.,!?;]|\n+/g)).map(
      (match, index, array) => {
        const text = match[0];
        const start = match.index ?? 0;
        const end = start + text.length - 1;

        return {
          id: index,
          text,
          start,
          end,
          type: text.includes("\n") ? "newline" : "word",
          newLineCount: text.length,
          isBeforePunctuation:
            !!array[index + 1] && /[.,!?;]/.test(array[index + 1][0]),
        };
      }
    );
  }, [testData]);

  // 各単語の座標を保存
  const onWordLayout = (event: LayoutChangeEvent, id: number) => {
    const { x, y, width, height } = event.nativeEvent.layout;
    wordPositions.current = [
      ...wordPositions.current.filter((w) => w.id !== id),
      { id, x, y, width, height },
    ];
  };

  // タッチ位置を調節して最も近い単語を探す
  const getClosestWordIndex = useCallback(
    (x: number, y: number) => {
      // 端末によって調整値変える必要あるかも(マジックナンバーやめる)
      const adjustedY = y - (insets.top + 55);
      const adjustedX = x - 20;

      const { id: closestIndex } = wordPositions.current.reduce(
        (closest, word) => {
          // 単語の中心点を計算
          const centerX = word.x + word.width / 2;
          const centerY = word.y + word.height / 2;

          // タッチ位置と単語の中心点の距離を計算
          const distance = Math.sqrt(
            (centerX - adjustedX) ** 2 + (centerY - adjustedY) ** 2
          );

          return distance < closest.distance
            ? { id: word.id, distance }
            : closest;
        },
        { id: 0, distance: Infinity }
      );

      return closestIndex;
    },
    [insets.top]
  );

  const updateSelectedRange = useCallback(() => {
    if (startIndexRef.current !== null && endIndexRef.current !== null) {
      const minIdx = Math.min(startIndexRef.current, endIndexRef.current);
      const maxIdx = Math.max(startIndexRef.current, endIndexRef.current);

      const oldMin = selectedIndices.at(0);
      const oldMax = selectedIndices.at(-1);
      const currentMin = minIdx;
      const currentMax = maxIdx;

      if (oldMin === currentMin && oldMax === currentMax) {
        return;
      }

      setSelectedIndices((prev) => {
        return Array.from(
          { length: maxIdx - minIdx + 1 },
          (_, i) => minIdx + i
        );
      });
    }
  }, [selectedIndices]);

  const handlePanResponderGrant = useCallback(
    (event: GestureResponderEvent, gestureState: PanResponderGestureState) => {
      const startIdx = getClosestWordIndex(gestureState.x0, gestureState.y0);
      startIndexRef.current = startIdx;
      endIndexRef.current = startIdx;
      setSelectedIndices([startIdx]);
    },
    [getClosestWordIndex]
  );

  const handlePanResponderMove = useCallback(
    (event: GestureResponderEvent, gestureState: PanResponderGestureState) => {
      const endIdx = getClosestWordIndex(
        gestureState.moveX,
        gestureState.moveY
      );

      endIndexRef.current = endIdx;

      updateSelectedRange();
    },
    [getClosestWordIndex, updateSelectedRange]
  );

  const handlePanResponderRelease = useCallback(() => {
    startIndexRef.current = null;
    endIndexRef.current = null;
  }, [selectedIndices]);

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderGrant: handlePanResponderGrant,
        onPanResponderMove: handlePanResponderMove,
        onPanResponderRelease: handlePanResponderRelease,
      }),
    [handlePanResponderGrant, handlePanResponderMove, handlePanResponderRelease]
  );

  return { words, selectedIndices, onWordLayout, panResponder };
}
