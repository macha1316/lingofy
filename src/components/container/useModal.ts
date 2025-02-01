import { Href, useRouter } from "expo-router";
import { useCallback } from "react";

export const useModal = (modalPath: Href) => {
  const router = useRouter();

  const openModal = useCallback(() => {
    router.push(modalPath);
  }, [modalPath]);

  const closeModal = useCallback(() => {
    router.back();
  }, []);

  return {
    openModal,
    closeModal,
  };
};
