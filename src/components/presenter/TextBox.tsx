import React from "react";
import { StyleSheet, TextInput } from "react-native";

interface Props {
  placeHolder: string;
}

const TextBox = ({ placeHolder }: Props) => {
  const [text, setText] = React.useState("");

  return (
    <TextInput
      style={styles.textBox}
      onChangeText={setText}
      value={text}
      placeholder={placeHolder}
      placeholderTextColor="gray"
    />
  );
};

const styles = StyleSheet.create({
  textBox: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10,
  },
});

export default TextBox;
