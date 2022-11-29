import { Btn, SideBar } from "@/components/common";
import Viewer from "@/components/common/Viewer";
import ContentTemplate from "@/templates/ContentTemplate";
import { MdOutlineShare } from "react-icons/md";
interface Props {
  content: string;
  language: string;
}
const SingleReadContainer = ({ content, language }: Props) => {
  return (
    <ContentTemplate button={<Btn icon={<MdOutlineShare />} text="SHARE" />}>
      <SideBar type="read" />
      <Viewer content={content} language={language} />
    </ContentTemplate>
  );
};
export default SingleReadContainer;
