/** Core */
import { useCallback, useEffect, useState } from "react";
/** Components */
import { Reader, ReaderBtn } from "@/components/read";
/** Hook & Utils */
import { useContent, useMessage, useTheme } from "@/libs/hooks";
import clipboard from "@/libs/utils/clipboard";
import service from "@/libs/api";

const ReadContainer = () => {
  const [contents, , onChange] = useContent("");
  const [, onMessages] = useMessage();
  const [, , themeMode] = useTheme(); //테마(다크,라이트)
  const [language, setLanguage] = useState("");
  useEffect(() => {
    service.post("/read", { id: 1 }).then((res) => {
      onChange(res.code);
      setLanguage(res.language);
    });
  }, []);

  const onClickCopy = useCallback((code: string) => {
    onMessages(clipboard(code, "Copy Code Sucessful"));
  }, []);
  return (
    <>
      <Reader contents={contents} language={language} theme={themeMode} />
      <ReaderBtn onClick={() => onClickCopy(contents)} />
    </>
  );
};
export default ReadContainer;
