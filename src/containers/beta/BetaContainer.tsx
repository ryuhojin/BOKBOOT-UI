import Btn from "@/components/common/Btn";
import Ctn from "@/components/common/Ctn";
import ContentTemplate from "@/templates/ContentTemplate";
import { MdOutlineShare } from "react-icons/md";

const BetaContainer = () => {
  return (
    <ContentTemplate button={<Btn icon={<MdOutlineShare />} text="SHARE" />}>
      {/* <Ctn /> */}
      <></>
    </ContentTemplate>
  );
};
export default BetaContainer;
