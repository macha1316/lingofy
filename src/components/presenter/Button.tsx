import React from "react";
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

interface ButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  text?: string;
  icon?: React.ReactNode;
  style?: object;
  textStyle?: object;
}

const Button = ({ text, onPress, style, textStyle, icon }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {icon}
      {text && <Text style={[styles.text, textStyle]}>{text}</Text>}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});
