import Btn from "../base/Btn";
import * as S from "./style/StyledWriteBtn";
import { MdContentCopy } from "react-icons/md";
const CopyBtn = () => {
  return (
    <S.WriteBtnLayout>
      <Btn icon={<MdContentCopy />} text="COPY"/>
    </S.WriteBtnLayout>
  );
};
export default CopyBtn;
