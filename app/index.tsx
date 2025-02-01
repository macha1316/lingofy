import useIndexContainer from "@/src/container/useIndexContainer";
import { ActivityIndicator, View } from "react-native";

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
