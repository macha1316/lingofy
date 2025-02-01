import { router } from "expo-router";
import { useEffect, useState } from "react";

// のちにAPI経由でログイン状態を取得する処理の追加
export default function useIndexContainer() {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    // requestAnimationFrameを使って、画面遷移を遅延させる(最適でないかも)
    requestAnimationFrame(() => {
      if (!isLoading) {
        if (isLoggedIn) {
          router.replace("/home/main");
        } else {
          router.replace("/auth/login");
        }
      }
    });
  }, [isLoading, isLoggedIn]);

  return {
    isLoading,
  };
}
