import { useRouter } from "expo-router";
import { useCallback } from "react";

export const useModal = () => {
  const router = useRouter();

  const openModal = useCallback(() => {
    router.push("/modal");
  }, []);

  const closeModal = useCallback(() => {
    router.back();
  }, []);

  return {
    openModal,
    closeModal,
  };
};
