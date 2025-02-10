import TextBox from "@/src/components/presenter/TextBox";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
const wordDetailModal = () => {
  const { selectedWords } = useLocalSearchParams();
  return (
    <View style={styles.container}>
      {/* お気に入り登録UIの作成 */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          backgroundColor: "#e9ecef",
          flexWrap: "wrap",
          padding: 10,
          alignItems: "center",
          borderRadius: 5,
        }}
      >
        <AntDesign name="sound" size={20} color="black" />
        <Text
          style={{
            fontSize: 16,
            fontWeight: "medium",
            backgroundColor: "#e9ecef",
          }}
        >
          {selectedWords}
        </Text>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          backgroundColor: "#e9ecef",
          flexWrap: "wrap",
          padding: 10,
          alignItems: "center",
          borderRadius: 5,
        }}
      >
        <AntDesign name="sound" size={20} color="black" />
        <Text style={{ fontSize: 16, fontWeight: "medium" }}>
          暖かさも光も下にある街に届かなくなります。
        </Text>
      </View>

      <View>
        <Text style={{ fontSize: 16, fontWeight: "medium", marginBottom: 20 }}>
          Ask AI
        </Text>
        <TextBox placeHolder="ask ..." />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 20,
    backgroundColor: "#f8f9fa",
  },
});

export default wordDetailModal;
