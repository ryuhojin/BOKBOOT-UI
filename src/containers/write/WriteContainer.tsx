/** Core */
import { useCallback, useEffect } from "react";
/** Components */
import { Writer, WriterBtn } from "@/components/write";
/** Hook & Utils */
import { useContent, useMessage, useTheme } from "@/libs/hooks";
import service from "@/libs/api";
import clipboard from "@/libs/utils/clipboard";
import flourite from "flourite";

const WriteContainer = () => {
  const [content, language, onChange] = useContent(""); //코드내용
  const [, onMessages] = useMessage(); //토스트메세지
  const [, , themeMode] = useTheme(); //테마(다크,라이트)

  const onClickShare = useCallback((code: string) => {
    service
      .post("/write", { code: code })
      .then((res) => {
        onMessages(
          clipboard(
            "http://localhost:3000/read?id=1",
            flourite(code).language + " " + res.message
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
      <WriterBtn onClick={() => onClickShare(content)} />
    </>
  );
};
export default WriteContainer;
