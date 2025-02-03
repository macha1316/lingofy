import Button from "@/src/components/presenter/Button";
import useNavigation from "@/src/hooks/useNavigation";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Stack } from "expo-router";
import React from "react";

const Layout = () => {
  const { goBack } = useNavigation();

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          title: "A Glimpse into the Future",
          headerLeft: () => (
            <Button
              icon={<AntDesign name="left" size={20} color="black" />}
              onPress={goBack}
              style={{ marginLeft: -10 }}
            />
          ),
        }}
      />
    </Stack>
  );
};

export default Layout;
