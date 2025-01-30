import useIndexContainer from "@/src/container";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";

// のちにAPI経由でログイン状態を取得する処理の追加
export default function Index() {
  const { isLoading } = useIndexContainer();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}
