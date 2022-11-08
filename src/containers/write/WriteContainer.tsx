/** Core */
import { lazy, useCallback } from "react";
/** Components */
import { Writer, WriterBtn } from "@/components/write";
/** Hook & Utils */
import { useContent, useMessage, useTheme } from "@/libs/hooks";
import service from "@/libs/api";
import clipboard from "@/libs/utils/clipboard";

const WriteContainer = () => {
  const [content, language, onChange] = useContent(""); //코드내용
  const [, onMessages] = useMessage(); //토스트메세지
  const [, , themeMode] = useTheme(); //테마(다크,라이트)

  const onClickShare = useCallback((code: string, language: string) => {
    service
      .post("/sourceCode", { sourceCode: code, language: language })
      .then((res) => {
        onMessages(
          clipboard(
            process.env.NODE_ENV === "development"
              ? `http://localhost:3000/read?id=${res.id}&key=${res.key}`
              : `${process.env.PRODUCTION_UI_URL}read?id=${res.id}&key=${res.key}`,
            "Coiped Source Code Link your Clipboard"
          )
        );
      })
      .catch((err) => {
        onMessages(err.message);
      });
  }, []);

  return (
    <>
      <Writer
        contents={content}
        theme={themeMode}
        language={language}
        onChange={onChange}
      />
      <WriterBtn onClick={() => onClickShare(content, language)} />
    </>
  );
};
export default WriteContainer;
