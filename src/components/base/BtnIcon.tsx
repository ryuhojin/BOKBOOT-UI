import * as S from "./style/StyledBtnIcon";

interface Props {
  icon: JSX.Element;
}

const IconBtn = ({ icon }: Props) => {
  return <S.BtnIconLayout>{icon}</S.BtnIconLayout>;
};
export default IconBtn;
