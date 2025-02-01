import { useCallback, useState } from "react";

export const useTable = () => {
  const [open, setOpen] = useState(true);

  const toggleTable = useCallback(() => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [open]);

  return {
    open,
    toggleTable,
  };
};
