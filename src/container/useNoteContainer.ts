import { useCallback, useMemo, useRef, useState } from "react";
import {
  GestureResponderEvent,
  LayoutChangeEvent,
  PanResponder,
  PanResponderGestureState,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useModal } from "../components/container/useModal";

type NoteContainerProps = {
  testData: string;
};

export default function useNoteContainer({ testData }: NoteContainerProps) {
  const insets = useSafeAreaInsets();
  const { openModal } = useModal("/(modal)/wordDetailModal");

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

  // 選択されている単語があればそれを、なければ近い単語を取得
  const getClosestWordIndex = useCallback(
    (x: number, y: number) => {
      const adjustedY = y - (insets.top + 55);
      const adjustedX = x - 20;

      let closestIndex = null;
      let minDistance = Infinity;

      for (const word of wordPositions.current) {
        // タップが単語の範囲内にあるか
        if (
          adjustedX >= word.x &&
          adjustedX <= word.x + word.width &&
          adjustedY >= word.y &&
          adjustedY <= word.y + word.height
        ) {
          return word.id;
        }

        // 範囲内でなかった場
        const centerX = word.x + word.width / 2;
        const centerY = word.y + word.height / 2;
        const distance = Math.sqrt(
          (centerX - adjustedX) ** 2 + (centerY - adjustedY) ** 2
        );

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = word.id;
        }
      }

      return closestIndex ?? 0;
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

    const selectedWords = selectedIndices
      .map((index) => {
        const word = words[index].text;
        const prevWord = words[index - 1].text;

        if (prevWord === "\n") return word;
        if (/[.,!?;]/.test(word)) return word;

        return ` ${word}`;
      })
      .join("")
      .trim();

    openModal({ selectedWords });
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
