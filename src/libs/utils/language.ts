import { javascript, json, typescript } from "@codemirror/legacy-modes/mode/javascript";
import { java, cpp, c, kotlin } from "@codemirror/legacy-modes/mode/clike";
import { python } from "@codemirror/legacy-modes/mode/python";
import { standardSQL } from "@codemirror/legacy-modes/mode/sql";
const languageSwitch = (language: string) => {
  switch (language) {
    case "Java":
      return java;
    case "Javascript":
      return javascript;
    case "Typescript":
      return typescript;
    case "Json":
      return json;
    case "C++":
      return cpp;
    case "C":
      return c;
    case "Python":
      return python;
    case "Kotlin":
      return kotlin;
    case "SQL":
      return standardSQL;
    default:
      return java;
  }
};

export default languageSwitch;
