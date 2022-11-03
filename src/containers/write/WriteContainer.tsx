/** Core */
import { useCallback } from "react";
/** Components */
import { Writer, WriterBtn } from "@/components/write";
/** Hook & Utils */
import { useContent, useMessage } from "@/libs/hooks";
import service from "@/libs/api";
import clipboard from "@/libs/utils/clipboard";
import flourite from "flourite";

const WriteContainer = () => {
  const [contents, onChange] = useContent("");
  const [, onMessages] = useMessage();

  const onClickShare = useCallback((code: string) => {
    console.log(flourite(code));
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
      <Writer contents={contents} onChange={onChange} />
      <WriterBtn onClick={() => onClickShare(contents)} />
    </>
  );
};
export default WriteContainer;
