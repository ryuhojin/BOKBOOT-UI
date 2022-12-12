import { Btn, SideBar } from "@/components/common";
import Viewer from "@/components/common/Viewer";
import { useMessage } from "@/libs/hooks";
import clipboard from "@/libs/utils/clipboard";
import ContentTemplate from "@/templates/ContentTemplate";
import { useCallback } from "react";
import { MdOutlineShare } from "react-icons/md";
interface Props {
  content: string;
  language: string;
}
const SingleReadContainer = ({ content, language }: Props) => {
  const [, onMessages] = useMessage();

  const onClickCopy = useCallback((code: string) => {
    onMessages(clipboard(code, "Copy Code Sucessful"));
  }, []);

  return (
    <ContentTemplate
      button={
        <Btn
          icon={<MdOutlineShare />}
          text="SHARE"
          onClick={() => onClickCopy(content)}
        />
      }
    >
      <SideBar type="read" />
      <Viewer content={content} language={language} />
    </ContentTemplate>
  );
};
export default SingleReadContainer;
