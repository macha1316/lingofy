import { Href, router } from "expo-router";
import { useCallback } from "react";

export const useNavigation = () => {
  const pageReplace = useCallback((pagePath: Href) => {
    router.replace(pagePath);
  }, []);

  const pageNavigation = useCallback((pagePath: Href) => {
    router.push(pagePath);
  }, []);

  return {
    pageReplace,
    pageNavigation,
  };
};

export default useNavigation;
