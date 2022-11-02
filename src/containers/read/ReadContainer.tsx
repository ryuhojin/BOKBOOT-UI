/** Core */
import { useCallback, useEffect } from "react";
/** Components */
import { Reader, ReaderBtn } from "@/components/read";
/** Hook & Utils */
import { useContent, useMessage } from "@/libs/hooks";
import clipboard from "@/libs/utils/clipboard";
import service from "@/libs/api";

const ReadContainer = () => {
  const [contents, onChange] = useContent("");
  const [, onMessages] = useMessage();

  useEffect(() => {
    service.post("/read", { id: 1 }).then((res) => {
      onChange(res.code);
    });
  }, []);

  const onClickCopy = useCallback((code: string) => {
    onMessages(clipboard(code, "Copy Code Sucessful"));
  }, []);
  return (
    <>
      <Reader contents={contents} />
      <ReaderBtn onClick={() => onClickCopy(contents)} />
    </>
  );
};
export default ReadContainer;
