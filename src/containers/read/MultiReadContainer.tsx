import { Btn, SideBar } from "@/components/common";
import Viewer from "@/components/common/Viewer";
import { useMessage } from "@/libs/hooks";
import useContents from "@/libs/hooks/useContents";
import clipboard from "@/libs/utils/clipboard";
import ContentsTemplate from "@/templates/ContentsTemplate";
import { useCallback } from "react";
import { MdOutlineShare } from "react-icons/md";
import MultiItemContainer from "./MultiItemContainer";

const MultiReadContainer = () => {
  const [contents, language] = useContents();
  const [, onMessages] = useMessage();

  const onClickCopy = useCallback((code: string) => {
    onMessages(clipboard(code, "Copy Code Sucessful"));
  }, []);

  return (
    <ContentsTemplate
      multiZone={<MultiItemContainer />}
      button={
        <Btn
          icon={<MdOutlineShare />}
          text="SHARE"
          onClick={() => onClickCopy(contents)}
        />
      }
    >
      <SideBar type="read" />
      <Viewer content={contents} language={language} />
    </ContentsTemplate>
  );
};
export default MultiReadContainer;
