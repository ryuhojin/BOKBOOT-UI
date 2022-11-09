import Btn from "@/components/base/Btn";
import * as S from "./style/StyledWriteBtn";
import { MdOutlineShare } from "react-icons/md";

const WriteBtn = ({ ...rest }) => {
  return (
    <S.WriteBtnLayout>
      <Btn icon={<MdOutlineShare />} text="SHARE" {...rest} />
    </S.WriteBtnLayout>
  );
};
export default WriteBtn;
