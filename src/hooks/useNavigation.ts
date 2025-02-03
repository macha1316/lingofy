import { Href, router } from "expo-router";
import { useCallback } from "react";

export const useNavigation = () => {
  const pageReplace = useCallback((pagePath: Href) => {
    router.replace(pagePath);
  }, []);

  const pageNavigation = useCallback((pagePath: Href) => {
    router.push(pagePath);
  }, []);

  const goBack = useCallback(() => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/");
    }
  }, []);

  return {
    pageReplace,
    pageNavigation,
    goBack,
  };
};

export default useNavigation;
