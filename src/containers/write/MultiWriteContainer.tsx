import { Btn, Editor, SideBar } from "@/components/common";
import service from "@/libs/api";
import { useMessage } from "@/libs/hooks";
import useContents from "@/libs/hooks/useContents";
import clipboard from "@/libs/utils/clipboard";
import ContentsTemplate from "@/templates/ContentsTemplate";
import { useCallback } from "react";
import { MdOutlineShare } from "react-icons/md";
import MultiItemContainer from "./MultiItemContainer";

const MultiWriteContainer = () => {
  const [context, language, , , onChange, , , , , contents] = useContents();
  const [, onMessages] = useMessage(); //토스트메세지
  const onClickShare = useCallback(() => {
    service
      .post("/sourceCode", { sourceCodes: contents })
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
  }, [contents]);

  return (
    <ContentsTemplate
      multiZone={<MultiItemContainer />}
      button={
        <Btn icon={<MdOutlineShare />} text="SHARE" onClick={onClickShare} />
      }
    >
      <SideBar type="write" />
      <Editor content={context} language={language} onChange={onChange} />
    </ContentsTemplate>
  );
};
export default MultiWriteContainer;
