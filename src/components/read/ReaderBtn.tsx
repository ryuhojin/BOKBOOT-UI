import Btn from "../base/Btn";
import * as S from "./style/StyledReadBtn";
import { MdContentCopy } from "react-icons/md";

const ReadBtn = ({ ...rest }) => {
  return (
    <S.ReadBtnLayout {...rest}>
      <Btn icon={<MdContentCopy />} text="COPY" />
    </S.ReadBtnLayout>
  );
};
export default ReadBtn;
