import { dark, light } from "@/styles/theme";
import { useCallback, useMemo, useState } from "react";

const useTheme = () => {
  const isBrowserDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [themeMode, setThemeMode] = useState(
    isBrowserDarkMode ? "dark" : "light"
  );

  const onToggle = useCallback(() => {
    setThemeMode(themeMode === "light" ? "dark" : "light");
  }, [themeMode]);

  const theme = useMemo(() => {
    return themeMode === "light" ? light : dark;
  }, [themeMode]);

  return [theme, onToggle] as [typeof theme, typeof onToggle];
};

export default useTheme;
