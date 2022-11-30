import { useCallback, useEffect, useState } from "react";
import { useContent, useContents, useMessage, useTheme } from "@/libs/hooks";
import clipboard from "@/libs/utils/clipboard";
import service from "@/libs/api";
import { useSearchParams } from "react-router-dom";

const ReaderContainer = () => {
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
        console.log(res)
      });
  }, [searchParams]);

  const onClickCopy = useCallback((code: string) => {
    onMessages(clipboard(code, "Copy Code Sucessful"));
  }, []);
  
  //TODO : API호출후 여러개인지 판별하여 소스 뿌리기
  return <></>;
};
export default ReaderContainer;
