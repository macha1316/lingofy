import { useEffect, useState } from "react";
import useNavigation from "../hooks/useNavigation";

// のちにAPI経由でログイン状態を取得する処理の追加
export default function useIndexContainer() {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const { pageReplace } = useNavigation();

  useEffect(() => {
    // requestAnimationFrameを使って、画面遷移を遅延させる(最適でないかも)
    requestAnimationFrame(() => {
      if (!isLoading) {
        if (isLoggedIn) {
          pageReplace("/home/main");
        } else {
          pageReplace("/auth/login");
        }
      }
    });
  }, [isLoading, isLoggedIn]);

  return {
    isLoading,
  };
}
