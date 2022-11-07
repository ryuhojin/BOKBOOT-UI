import { javascript, json, typescript } from "@codemirror/legacy-modes/mode/javascript";
import { java, cpp, c, kotlin } from "@codemirror/legacy-modes/mode/clike";
import { python } from "@codemirror/legacy-modes/mode/python";
import { standardSQL } from "@codemirror/legacy-modes/mode/sql";
const languageSwitch = (language: string) => {
  switch (language.toUpperCase()) {
    case "JAVA":
      return java;
    case "JAVASCRIPT":
      return javascript;
    case "TYPESCRIPT":
      return typescript;
    case "JSON":
      return json;
    case "C++":
      return cpp;
    case "C":
      return c;
    case "PYTHON":
      return python;
    case "KOTLIN":
      return kotlin;
    case "SQL":
      return standardSQL;
    default:
      return java;
  }
};

export default languageSwitch;
