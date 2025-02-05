import { useCallback } from "react";
import { useModal } from "../components/container/useModal";
import useNavigation from "../hooks/useNavigation";

export default function useMainPageContainer() {
  const { openModal } = useModal("/(modal)/createNoteModal");
  const { pageNavigation } = useNavigation();

  const goToNotePage = useCallback(
    (id: number) => () => {
      pageNavigation("/note");
    },
    []
  );

  return {
    goToNotePage,
    openModal,
  };
}
