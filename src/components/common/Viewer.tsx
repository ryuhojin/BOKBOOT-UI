import { useEffect } from "react";
import * as S from "./style/StyledViewer";
import hljs from "highlight.js";

interface Props {
  content: string;
  language: string;
}
const Viewer = ({ content, language }: Props) => {
  useEffect(() => {
    if (language == "Unknown") return;
    if (!content) return;
    hljs.highlightBlock(document.getElementById("editor") as HTMLElement);
  }, [content, language]);

  return (
    <S.ViewerLayout>
      <pre>
        <code id="editor" className={"language-" + language.toLowerCase()}>
          {content}
        </code>
      </pre>
    </S.ViewerLayout>
  );
};
export default Viewer;
