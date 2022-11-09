import Btn from "../base/Btn";
import * as S from "./style/StyledReadBtn";
import { MdContentCopy } from "react-icons/md";

const ReadBtn = ({ ...rest }) => {
  return (
    <S.ReadBtnLayout>
      <Btn icon={<MdContentCopy />} text="COPY" {...rest}/>
    </S.ReadBtnLayout>
  );
};
export default ReadBtn;
