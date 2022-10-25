import * as S from "./style/StyledFloatBtn";
import { MdOutlineContentCopy } from "react-icons/md";
const FloatBtn = () => {
  return (
    <S.FloatBtnLayout>
      <MdOutlineContentCopy color="#fff" />
      <span style={{ color: "#fff" }}> COPY</span>
    </S.FloatBtnLayout>
  );
};
export default FloatBtn;
