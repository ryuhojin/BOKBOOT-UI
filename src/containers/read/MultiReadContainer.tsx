import { Btn, SideBar } from "@/components/common";
import Viewer from "@/components/common/Viewer";
import useContents from "@/libs/hooks/useContents";
import ContentsTemplate from "@/templates/ContentsTemplate";
import { MdOutlineShare } from "react-icons/md";
import MultiItemContainer from "./MultiItemContainer";

const MultiReadContainer = () => {
  const [contents, language] = useContents();
  return (
    <ContentsTemplate
      multiZone={<MultiItemContainer />}
      button={<Btn icon={<MdOutlineShare />} text="SHARE" />}
    >
      <SideBar type="read" />
      <Viewer content={contents} language={language} />
    </ContentsTemplate>
  );
};
export default MultiReadContainer;
