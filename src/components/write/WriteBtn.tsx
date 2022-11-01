import Btn from "../base/Btn";
import * as S from "./style/StyledWriteBtn";
import { MdOutlineShare } from "react-icons/md";
const WriteBtn = ({ ...rest }) => {
  return (
    <S.WriteBtnLayout {...rest}>
      <Btn icon={<MdOutlineShare />} text="SHARE" />
    </S.WriteBtnLayout>
  );
};
export default WriteBtn;
