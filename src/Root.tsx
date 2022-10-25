import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import WritePage from "@/pages/WritePage";
import Core from "@/containers/base/Core";
import useTheme from "@/libs/hooks/useTheme";

const Root = () => {
  const [theme] = useTheme();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<WritePage />} />
        </Routes>
        <Core />
      </ThemeProvider>
    </>
  );
};
export default Root;
