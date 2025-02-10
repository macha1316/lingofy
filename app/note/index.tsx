import useNoteContainer from "@/src/container/useNoteContainer";
import { StyleSheet, Text, View } from "react-native";

const testData = `
  The sky was an endless stretch of gray, 
  an iron curtain drawn across the heavens,,,cc,, s s,

  No.1
  allowing neither warmth nor light to penetrate the city below.

  No.2
  allowing neither warmth nor light to penetrate the city below.
`;

export default function Note() {
  const { words, selectedIndices, onWordLayout, panResponder } =
    useNoteContainer({ testData });

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      <View style={styles.textContainer}>
        {words.map((word, index) => {
          const isSelected = selectedIndices.includes(index);

          // text取得時にオブジェクトに入れるように修正する
          const hasPunctuationAfter = /[.,!?;]/.test(words[index + 1]?.text);

          return word.type === "newline" ? (
            <View
              key={word.id}
              style={{ width: "100%", height: word.newLineCount > 1 ? 16 : 1 }}
            />
          ) : (
            <Text
              key={word.id}
              style={[
                styles.mainText,
                isSelected && styles.selectedWord,
                isSelected && !hasPunctuationAfter && styles.textPadding,
                { marginRight: isSelected || word.isBeforePunctuation ? 0 : 4 },
              ]}
              onLayout={(event) => onWordLayout(event, index)}
            >
              {word.text}
            </Text>
          );
        })}
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
  textPadding: {
    paddingRight: 4,
  },
});
