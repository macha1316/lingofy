import { useCallback, useEffect } from "react";
import { useModal } from "../../../components/container/useModal";
import { clearStorage } from "../../../feature/asyncStorage";
import { auth } from "../../../feature/firebase/config/firebase";
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

  useEffect(() => {
    const userInfo = auth.currentUser;

    console.log("userInfo", userInfo);
  }, []);

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
