import Btn from "@/components/common/Btn";
import ContentTemplate from "@/templates/ContentTemplate";
import { MdOutlineShare } from "react-icons/md";

const BetaContainer = () => {
  return (
    <ContentTemplate button={<Btn icon={<MdOutlineShare />} text="SHARE" />}>
      <></>
    </ContentTemplate>
  );
};
export default BetaContainer;
