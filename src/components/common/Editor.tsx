import { useTheme } from "@/libs/hooks";
import { memo, useEffect } from "react";
import * as S from "./style/StyledEditor";
import hljs from "highlight.js";

interface Props {
  content: string;
  language: string;
  onChange: (content: string) => void;
}
const Editor = ({ content, language, onChange }: Props) => {
  const [, , themeMode] = useTheme();
  //TODO : css동적 적용하는거 다른방법 사용해야 될것 같음.
  //이렇게하니깐 바꾸고 중복으로 적용됨. ㅠㅠ
  useEffect(() => {
    themeMode == "light"
      ? require("highlight.js/styles/github.css")
      : require("highlight.js/styles/github-dark.css");
  }, [themeMode]);

  useEffect(() => {
    if (language == "Unknown") return;
    if (!content) return;
    hljs.highlightBlock(document.getElementById("editor") as HTMLElement);
  }, [content, language]);

  return (
    <S.EditorLayout>
      <S.EditorContentsFront
        onChange={(e) => onChange(e.target.value)}
      ></S.EditorContentsFront>
      <pre>
        <code id="editor" className={"language-" + language.toLowerCase()}>
          {content}
        </code>
      </pre>
    </S.EditorLayout>
  );
};
export default memo(Editor);
