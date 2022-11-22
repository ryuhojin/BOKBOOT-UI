import { useContent } from "@/libs/hooks";
import * as S from "./style/StyledEditor";
const Editor = () => {
  const [content, , onChange] = useContent("");
  return (
    <S.EditorLayout>
      <S.EditorContentsFront
        onChange={(e: any) => onChange(e.target.value)}
      ></S.EditorContentsFront>
      <S.EditorContentsBack>
        <S.EditorContentBackCode>{content}</S.EditorContentBackCode>
      </S.EditorContentsBack>
    </S.EditorLayout>
  );
};
export default Editor;
