import { atom } from "recoil";

const themeState = atom({
  key: "themeState",
  default:
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
});

const messageState = atom({
  key: "messageState",
  default: {
    message: [],
  },
});

export { themeState, messageState };
