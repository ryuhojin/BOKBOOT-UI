import Btn from "../base/Btn";
import * as S from "./style/StyledWriteBtn";
import { MdOutlineShare } from "react-icons/md";
const WriteBtn = () => {
  return (
    <S.WriteBtnLayout>
      <Btn icon={<MdOutlineShare />} text="SHARE" />
    </S.WriteBtnLayout>
  );
};
export default WriteBtn;
