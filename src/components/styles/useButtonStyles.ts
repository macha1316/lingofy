import { useMemo } from "react";
import { StyleSheet } from "react-native";

export const useButtonStyles = (isIcon: boolean, customStyle?: object) => {
  return useMemo(() => {
    const baseStyle = StyleSheet.create({
      button: {
        backgroundColor: isIcon ? "" : "#007BFF",
        padding: 5,
        borderRadius: 5,
        alignItems: "center",
      },
      text: {
        color: "#FFFFFF",
        fontSize: 16,
      },
    });

    return {
      button: [baseStyle.button, customStyle],
      text: baseStyle.text,
    };
  }, [isIcon, customStyle]);
};
