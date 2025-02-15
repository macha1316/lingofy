import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface TextBoxProps {
  placeHolder: string;
  onChangeText: (text: string) => void;
  value: string;
  topText?: string;
}

const TextBox = ({
  placeHolder,
  topText,
  onChangeText,
  value,
}: TextBoxProps) => {
  return (
    <View>
      {topText === undefined ? null : (
        <Text style={styles.topText}>{topText}</Text>
      )}
      <TextInput
        style={styles.textBox}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeHolder}
        placeholderTextColor="gray"
        autoCapitalize="none"
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
