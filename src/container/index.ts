import { router } from "expo-router";
import { useEffect, useState } from "react";

// のちにAPI経由でログイン状態を取得する処理の追加
export default function useIndexContainer() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      if (isLoggedIn) {
        router.replace("/home");
      } else {
        router.replace("/auth/login");
      }
    }
  }, [isLoading, isLoggedIn]);

  return {
    isLoading,
  };
}
