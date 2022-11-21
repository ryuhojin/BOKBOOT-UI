import Btn from "@/components/common/Btn";
import SideBar from "@/components/common/SideBar";
import ContentTemplate from "@/templates/ContentTemplate";
import { MdOutlineShare } from "react-icons/md";

const BetaContainer = () => {
  return (
    <ContentTemplate button={<Btn icon={<MdOutlineShare />} text="SHARE" />}>
      <SideBar></SideBar>
      <textarea style={{position:'absolute', width:'100%',height:'100%'}}></textarea>
    </ContentTemplate>
  );
};
export default BetaContainer;
