import Button from "@/src/components/presenter/Button";
import TextBox from "@/src/components/presenter/TextBox";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const createNoteModal = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 15, fontWeight: "bold", marginBottom: 20 }}>
        🗒️ ノート作成
      </Text>
      <TextBox placeHolder="タグ選択" topText="🏷️ タグの選択または作成" />
      <TextBox placeHolder="ノート名" topText="🗒️ 新規ノート名の入力" />

      {/* タブを作ってペースト、webから, ランダム生成 */}

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
