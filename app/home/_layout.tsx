import Button from "@/src/components/presenter/Button";
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
            text="🍔"
            onPress={() => console.log("ハンバーガー")}
            isIcon={true}
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
