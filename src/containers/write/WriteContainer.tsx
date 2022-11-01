import WriteBtn from "@/components/write/WriteBtn";
import Writer from "@/components/write/Writer";
import service from "@/libs/api";
import useContent from "@/libs/hooks/useContent";
import useMessage from "@/libs/hooks/useMessage";
import { useCallback } from "react";
import clipboard from "@/libs/utils/clipboard";

const WriteContainer = () => {
  const [contents, onChange] = useContent("");
  const [messages, onMessages] = useMessage();

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
      <WriteBtn onClick={() => onClickShare(contents)} />
    </>
  );
};
export default WriteContainer;
