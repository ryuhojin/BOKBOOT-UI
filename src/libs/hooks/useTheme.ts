import { dark, light } from "@/styles/theme";
import { useCallback, useMemo, useState } from "react";
import { useRecoilState } from "recoil";
import { themeState } from "../store/atom";
const useTheme = () => {
  const [themeMode, setThemeMode] = useRecoilState(themeState);

  const onToggle = useCallback(() => {
    setThemeMode(themeMode === "light" ? "dark" : "light");
  }, [themeMode]);

  const theme = useMemo(() => {
    return themeMode === "light" ? light : dark;
  }, [themeMode]);

  return [theme, onToggle, themeMode] as [
    typeof theme,
    typeof onToggle,
    typeof themeMode
  ];
};

export default useTheme;
