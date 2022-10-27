import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";

import Root from "@/Root";
import "@/styles/index.css";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./libs/api/mocks/browser");
  worker.start();
}

const container = document.getElementById("root");
const root = createRoot(container as Element);

root.render(
  <RecoilRoot>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </RecoilRoot>
);
