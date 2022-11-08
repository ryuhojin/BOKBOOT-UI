/** Core */
import { useCallback, useEffect, useState } from "react";
/** Components */
import { Reader, ReaderBtn } from "@/components/read";
/** Hook & Utils */
import { useContent, useMessage, useTheme } from "@/libs/hooks";
import clipboard from "@/libs/utils/clipboard";
import service from "@/libs/api";
import { useSearchParams } from "react-router-dom";

const ReadContainer = () => {
  const [contents, , onChange] = useContent("");
  const [, onMessages] = useMessage();
  const [, , themeMode] = useTheme(); //테마(다크,라이트)
  const [language, setLanguage] = useState("");
  const [searchParams] = useSearchParams();
  useEffect(() => {
    if (!searchParams.get("id") && !searchParams.get("key")) return;
    service
      .get(`/sourceCode/${searchParams.get("id")}`, {
        key: searchParams.get("key"),
      })
      .then((res) => {
        onChange(res.sourceCode);
        setLanguage(res.language);
      });
  }, [searchParams]);

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
