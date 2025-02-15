import React from "react";
import { Controller } from "react-hook-form";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface TextBoxFormProps {
  placeHolder: string;
  control: any;
  name: string;
  topText?: string;
  rules?: {
    required: string;
    pattern?: {
      value: RegExp;
      message: string;
    };
    minLength?: {
      value: number;
      message: string;
    };
  };
}

const TextBoxForm = ({
  placeHolder,
  topText,
  control,
  name,
  rules,
}: TextBoxFormProps) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <View>
          <View>
            {topText === undefined ? null : (
              <Text style={styles.topText}>{topText}</Text>
            )}
            <TextInput
              style={styles.textBox}
              onChangeText={onChange}
              value={value}
              placeholder={placeHolder}
              placeholderTextColor="gray"
              autoCapitalize="none"
            />
          </View>
          {error && <Text style={{ color: "red" }}>{error.message}</Text>}
        </View>
      )}
    />
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

export default TextBoxForm;
