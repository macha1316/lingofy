import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";

// Firebase コンソールから取得
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_API_URL,
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: process.env.YOUR_PROJECT_ID,
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
