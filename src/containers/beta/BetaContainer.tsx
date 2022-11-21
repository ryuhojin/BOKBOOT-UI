import Btn from "@/components/common/Btn";
import CtnGroup from "@/components/common/CtnGroup";
import ContentTemplate from "@/templates/ContentTemplate";
import { MdOutlineShare } from "react-icons/md";

const BetaContainer = () => {
  return (
    <ContentTemplate button={<Btn icon={<MdOutlineShare />} text="SHARE" />}>
      <CtnGroup />
      {/* <></> */}
    </ContentTemplate>
  );
};
export default BetaContainer;
