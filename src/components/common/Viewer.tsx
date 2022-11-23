import * as S from "./style/StyledViewer";
// import hljs from "highlight.js";
// import "highlight.js/styles/github-dark.css";

interface Props {
  content: string;
  language: string;
}
const Editor = ({ content, language, ...rest }: Props) => {
  // useEffect(() => {
  //   hljs.highlightAll();
  // }, [content]);

  return (
    <S.ViewerLayout>
      <pre>
        <code className={language}>{content}</code>
      </pre>
    </S.ViewerLayout>
  );
};
export default Editor;
