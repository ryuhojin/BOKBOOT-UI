import Btn from "@/components/common/Btn";
import Editor from "@/components/common/Editor";
import SideBar from "@/components/common/SideBar";
import { useContent } from "@/libs/hooks";
import ContentTemplate from "@/templates/ContentTemplate";
import { MdOutlineShare } from "react-icons/md";

const SingleWriteContainer = () => {
  const [content, language, onChange] = useContent("");
  return (
    <ContentTemplate button={<Btn icon={<MdOutlineShare />} text="SHARE" />}>
      <SideBar />
      <Editor content={content} language={language} onChange={onChange} />
    </ContentTemplate>
  );
};
export default SingleWriteContainer;
