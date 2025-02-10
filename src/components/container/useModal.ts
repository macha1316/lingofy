import { useRouter } from "expo-router";
import { useCallback } from "react";

// TODO: 型制約つける
export const useModal = (modalPath: any) => {
  const router = useRouter();

  const openModal = useCallback(
    (params?: Record<string, any>) => {
      router.push({
        pathname: modalPath,
        params,
      });
    },
    [modalPath]
  );

  const closeModal = useCallback(() => {
    router.back();
  }, []);

  return {
    openModal,
    closeModal,
  };
};
