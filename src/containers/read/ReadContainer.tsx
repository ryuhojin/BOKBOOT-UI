import Reader from "@/components/read/Reader";
import ReadBtn from "@/components/read/ReaderBtn";
import service from "@/libs/api";
import useContent from "@/libs/hooks/useContent";
import useMessage from "@/libs/hooks/useMessage";
import clipboard from "@/libs/utils/clipboard";
import { useCallback, useEffect } from "react";

const ReadContainer = () => {
  const [contents, onChange] = useContent("");
  const [messages, onMessages] = useMessage();

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
      <ReadBtn onClick={() => onClickCopy(contents)} />
    </>
  );
};
export default ReadContainer;
