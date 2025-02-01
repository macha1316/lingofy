import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface Props {
  placeHolder: string;
  topText?: string;
}

const TextBox = ({ placeHolder, topText }: Props) => {
  const [inputText, setText] = React.useState("");

  return (
    <View>
      {topText === undefined ? null : (
        <Text style={styles.topText}>{topText}</Text>
      )}
      <TextInput
        style={styles.textBox}
        onChangeText={setText}
        value={inputText}
        placeholder={placeHolder}
        placeholderTextColor="gray"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  topText: {
    color: "gray",
    marginBottom: 5,
  },
  textBox: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10,
  },
});

export default TextBox;
