import Btn from "@/components/common/Btn";
import Editor from "@/components/common/Editor";
import SideBar from "@/components/common/SideBar";
import ContentTemplate from "@/templates/ContentTemplate";
import { MdOutlineShare } from "react-icons/md";

const BetaContainer = () => {
  return (
    <ContentTemplate button={<Btn icon={<MdOutlineShare />} text="SHARE" />}>
      <SideBar />
      <Editor />
    </ContentTemplate>
  );
};
export default BetaContainer;
