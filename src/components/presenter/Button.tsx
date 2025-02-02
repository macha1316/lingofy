import React from "react";
import { GestureResponderEvent, Text, TouchableOpacity } from "react-native";
import { useButtonStyles } from "../styles/useButtonStyles";

interface ButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  text?: string;
  icon?: React.ReactNode;
  style?: object;
  textStyle?: object;
}

const Button = ({ text, onPress, style, textStyle, icon }: ButtonProps) => {
  const styles = useButtonStyles(!!icon, style);

  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {icon ? icon : <Text style={[styles.text, textStyle]}>{text}</Text>}
    </TouchableOpacity>
  );
};

export default Button;
