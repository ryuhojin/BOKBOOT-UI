import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import WritePage from "@/pages/WritePage";
import Core from "@/containers/base/Core";
import useTheme from "@/libs/hooks/useTheme";

const Root = () => {
  const [theme, onToggle] = useTheme();
  return (
    <>
      <ThemeProvider theme={theme}>
        <button
          style={{
            position: "fixed",
            zIndex: 999,
            top: 0,
            right: 0,
            margin: "20px",
          }}
          onClick={onToggle}
        >
          DarkMode Test
        </button>
        <Routes>
          <Route path="/" element={<WritePage />} />
        </Routes>
        <Core />
      </ThemeProvider>
    </>
  );
};
export default Root;
