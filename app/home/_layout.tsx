import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Tabs } from "expo-router";
import React from "react";

// タブナビゲーションの作成
const Tab = createBottomTabNavigator();

const Layout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="main/index" options={{ title: "Note" }} />
      <Tabs.Screen name="setting/index" options={{ title: "Setting" }} />
    </Tabs>
  );
};

export default Layout;
