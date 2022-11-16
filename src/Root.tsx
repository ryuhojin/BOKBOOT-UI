import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Core from "@/containers/base/Core";
import ReadPage from "./pages/ReadPage";
import WritePage from "@/pages/WritePage";

import useTheme from "@/libs/hooks/useTheme";
import BetaPage from "./pages/BetaPage";

const Root = () => {
  const [theme] = useTheme();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<WritePage />} />
          <Route path="/read" element={<ReadPage />} />
          <Route path="/beta" element={<BetaPage />} />
        </Routes>
        <Core />
      </ThemeProvider>
    </>
  );
};
export default Root;
