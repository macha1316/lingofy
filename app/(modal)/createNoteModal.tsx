import Button from "@/src/components/presenter/Button";
import TextBox from "@/src/components/presenter/TextBox";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const createNoteModal = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 15 }}>🗒️ ノートの作成</Text>
      <TextBox placeHolder="ノート名" />
      <Button text="作成する" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    gap: 20,
    backgroundColor: "#f8f9fa",
  },
});

export default createNoteModal;
