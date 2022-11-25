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

const popupState = atom<string[]>({
  key: "popupState",
  default: [],
});

const dimState = atom<boolean>({
  key: "dimState",
  default: false,
});

const menuState = atom<boolean>({
  key: "menuState",
  default: false,
});

const settingState = atom<object>({
  key: "settingState",
  default: {
    multiMode: false,
  },
});
export {
  themeState,
  messageState,
  popupState,
  dimState,
  menuState,
  settingState,
};
