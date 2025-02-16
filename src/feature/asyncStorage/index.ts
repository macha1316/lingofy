import AsyncStorage from "@react-native-async-storage/async-storage";

export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
    console.log("AsyncStorage cleared!");
  } catch (error) {
    console.error("Failed to clear AsyncStorage:", error);
  }
};
