import { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "../src/navigation/AuthNavigator";
import AppNavigator from "../src/navigation/AppNavigator";

// のちにAPI経由でログイン状態を取得する処理の追加
export default function index() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    async function checkAuth() {
      setIsLoggedIn(true);
      setIsLoading(false);
    }
    checkAuth();
  }, []);

  // ローディング中はローディング画面を表示
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  //   ログイン状態によって表示する画面を切り替える
  return (
    <NavigationContainer>
      {isLoggedIn ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
