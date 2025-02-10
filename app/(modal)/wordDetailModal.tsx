import TextBox from "@/src/components/presenter/TextBox";
import AntDesign from "@expo/vector-icons/AntDesign";
import Fontisto from "@expo/vector-icons/Fontisto";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
const wordDetailModal = () => {
  const { selectedWords } = useLocalSearchParams();
  return (
    <ScrollView style={styles.scrollView} indicatorStyle="black">
      <View style={styles.container}>
        <View style={styles.bookmarkContainer}>
          <Fontisto name="bookmark" size={24} color="black" />
        </View>

        <View style={styles.textContainer}>
          <AntDesign name="sound" size={20} color="black" />
          <Text style={styles.text}>{selectedWords}</Text>
        </View>

        <View style={styles.textContainer}>
          <AntDesign name="sound" size={20} color="black" />
          <Text style={styles.text}>
            暖かさも光も下にある街に届かなくなります。
            暖かさも光も下にある街に届かなくなります。
            暖かさも光も下にある街に届かなくなります。
            暖かさも光も下にある街に届かなくなります。
            暖かさも光も下にある街に届かなくなります。
            暖かさも光も下にある街に届かなくなります。
            暖かさも光も下にある街に届かなくなります。
            暖かさも光も下にある街に届かなくなります。
            暖かさも光も下にある街に届かなくなります。
            暖かさも光も下にある街に届かなくなります。
          </Text>
        </View>

        <View>
          <Text style={{ ...styles.text, marginBottom: 5, marginTop: 20 }}>
            メモ
          </Text>
          <TextBox placeHolder="A + Bの形で使う" />
        </View>
        <View>
          <Text style={{ ...styles.text, marginBottom: 5 }}>AIに質問</Text>
          <TextBox placeHolder="ex) この単語を使った例文を3つ作成して" />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  container: {
    flex: 1,
    padding: 20,
    gap: 20,
    backgroundColor: "#f8f9fa",
    paddingBottom: 100,
  },
  bookmarkContainer: {
    display: "flex",
    alignItems: "flex-end",
  },
  textContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#e9ecef",
    flexWrap: "wrap",
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: "medium",
  },
});

export default wordDetailModal;
