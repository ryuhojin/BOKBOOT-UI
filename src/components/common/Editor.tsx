import { useContent } from "@/libs/hooks";
import * as S from "./style/StyledEditor";
const Editor = () => {
  const [content, language, onChange] = useContent("");
  return (
    <S.EditorLayout>
      <S.EditorContentsFront
        onChange={(e: any) => onChange(e.target.value)}
      ></S.EditorContentsFront>
      <pre style={{ margin: "0", width: "100%", height: "100%" }}>
        <code style={{ width: "100%", height: "100%" }}>{content}</code>
      </pre>
    </S.EditorLayout>
  );
};
export default Editor;
