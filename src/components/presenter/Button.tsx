import React from "react";
import { GestureResponderEvent, Text, TouchableOpacity } from "react-native";
import { useButtonStyles } from "../styles/useButtonStyles";

interface ButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  text?: string;
  style?: object;
  textStyle?: object;
  isIcon?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onPress,
  style,
  textStyle,
  isIcon = false,
}) => {
  const styles = useButtonStyles(isIcon, style);
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
