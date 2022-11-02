/** Core */
import { useCallback } from "react";
/** Components */
import { Writer, WriterBtn } from "@/components/write";
/** Hook & Utils */
import { useContent, useMessage } from "@/libs/hooks";
import service from "@/libs/api";
import clipboard from "@/libs/utils/clipboard";

const WriteContainer = () => {
  const [contents, onChange] = useContent("");
  const [, onMessages] = useMessage();

  const onClickShare = useCallback((code: string) => {
    service
      .post("/write", { code: code })
      .then((res) => {
        onMessages(clipboard("http://localhost:3000/read?id=1", res.message));
      })
      .catch((err) => {
        onMessages(err.message);
      });
  }, []);
  return (
    <>
      <Writer contents={contents} onChange={onChange} />
      <WriterBtn onClick={() => onClickShare(contents)} />
    </>
  );
};
export default WriteContainer;
