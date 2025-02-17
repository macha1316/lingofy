import { useCallback } from "react";
import { useModal } from "../../../components/container/useModal";
import { clearStorage } from "../../../feature/asyncStorage";
import useNavigation from "../../../hooks/useNavigation";

export default function useMainPageContainer() {
  const { openModal } = useModal("/(modal)/createNoteModal");
  const { pageNavigation } = useNavigation();

  const goToNotePage = useCallback(
    (id: number) => () => {
      pageNavigation("/note");
    },
    []
  );

  // デバッグ用
  const ClearStorage = () => {
    clearStorage();
  };

  return {
    goToNotePage,
    openModal,
    ClearStorage,
  };
}
