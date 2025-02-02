import { Stack } from "expo-router";
import React from "react";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: true, title: "A Glimpse into the Future" }}
      />
    </Stack>
  );
};

export default Layout;
