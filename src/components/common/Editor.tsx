import { memo, useEffect } from "react";
import * as S from "./style/StyledEditor";
import hljs from "highlight.js";
//TODO hljs tree shaking
interface Props {
  content: string;
  language: string;
  onChange: (content: string) => void;
}
const Editor = ({ content, language, onChange }: Props) => {
  useEffect(() => {
    if (language == "Unknown") return;
    if (!content) return;
    hljs.highlightBlock(document.getElementById("editor") as HTMLElement);
  }, [content, language]);

  return (
    <S.EditorLayout>
      <S.EditorContentsFront
        value={content}
        spellCheck={false}
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
