import Button from "@/src/components/presenter/Button";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import React from "react";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        // メモ化
        headerLeft: () => (
          <Button
            onPress={() => console.log("ハンバーガー")}
            icon={<Ionicons name="menu" size={24} color="black" />}
          />
        ),
      }}
    >
      <Tabs.Screen name="main/index" options={{ title: "Note" }} />
      <Tabs.Screen name="setting/index" options={{ title: "Setting" }} />
    </Tabs>
  );
};

export default Layout;
