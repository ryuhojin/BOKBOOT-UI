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

const settingState = atom<any>({
  key: "settingState",
  default: {
    multiMode: false,
  },
});
const contentState = atom<string>({
  key: "contentState",
  default: "",
});
const languageState = atom<string>({
  key: "languageState",
  default: "Unknown",
});
const contentsState = atom<any>({
  key: "contentsState",
  default: {
    contents: [""],
    languages: ["Unknown"],
    index: 0,
  },
});
export {
  themeState,
  messageState,
  popupState,
  dimState,
  menuState,
  settingState,
  contentState,
  languageState,
  contentsState,
};
