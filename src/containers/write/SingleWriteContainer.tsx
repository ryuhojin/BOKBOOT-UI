import Btn from "@/components/common/Btn";
import Editor from "@/components/common/Editor";
import SideBar from "@/components/common/SideBar";
import service from "@/libs/api";
import { useMessage } from "@/libs/hooks";
import { useContent } from "@/libs/hooks";
import clipboard from "@/libs/utils/clipboard";
import ContentTemplate from "@/templates/ContentTemplate";
import { useCallback } from "react";
import { MdOutlineShare } from "react-icons/md";

const SingleWriteContainer = () => {
  const [content, language, onChange] = useContent("");
  const [, onMessages] = useMessage(); //토스트메세지
  const onClickShare = useCallback(() => {
    service
      .post("/sourceCode", {
        sourceCodes: [{ source: content, language: language }],
      })
      .then((res) => {
        onMessages(
          clipboard(
            process.env.NODE_ENV === "development"
              ? `http://localhost:3000/read?id=${res.id}&key=${res.key}`
              : `${process.env.PRODUCTION_UI_URL}read?id=${res.id}&key=${res.key}`,
            "SoureCode Link your Clipboard"
          )
        );
      })
      .catch((err) => {});
  }, [content]);
  return (
    <ContentTemplate
      button={<Btn icon={<MdOutlineShare />} text="SHARE" onClick={onClickShare} />}
    >
      <SideBar type="write" />
      <Editor content={content} language={language} onChange={onChange} />
    </ContentTemplate>
  );
};
export default SingleWriteContainer;
