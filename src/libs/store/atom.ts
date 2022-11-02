import { atom } from "recoil";

//ThemeState for DarkMode
const themeState = atom({
  key: "themeState",
  default:
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
});

//MessageState for Toast Message
const messageState = atom<string[]>({
  key: "messageState",
  default: [],
});

export { themeState, messageState };
