import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Core from "@/containers/base/Core";
import ReadPage from "./pages/ReadPage";
import WritePage from "@/pages/WritePage";

import useTheme from "@/libs/hooks/useTheme";

const Root = () => {
  const [theme] = useTheme();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<WritePage />} />
          <Route path="/read" element={<ReadPage />} />
        </Routes>
        <Core />
      </ThemeProvider>
    </>
  );
};
export default Root;
