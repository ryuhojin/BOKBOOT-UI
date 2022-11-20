import { menuState } from "@/libs/store/atom";
import { useCallback, useEffect, useMemo } from "react";
import { useRecoilState } from "recoil";

const useMenu = () => {
  const [isOpen, toggleMenu] = useRecoilState(menuState);

  const onToggle = useCallback(() => {
    toggleMenu(!isOpen);
  }, [isOpen]);

  return [isOpen, onToggle] as [typeof isOpen, typeof onToggle];
};

export default useMenu;
