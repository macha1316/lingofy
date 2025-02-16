import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../feature/firebase/config/firebase";
import useNavigation from "../hooks/useNavigation";

// のちにAPI経由でログイン状態を取得する処理の追加
export default function useIndexContainer() {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const { pageReplace } = useNavigation();

  useEffect(() => {
    // Firebase のログイン状態を監視
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is logged in:", user.uid);
        setIsLoggedIn(true);
        pageReplace("/home/main");
        setIsLoading(true);
      } else {
        console.log("User is NOT logged in");
        setIsLoggedIn(false);
        pageReplace("/auth/login");
        setIsLoading(true);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    // requestAnimationFrameを使って、画面遷移を遅延させる(最適でないかも)
    requestAnimationFrame(() => {
      if (isLoading) {
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
