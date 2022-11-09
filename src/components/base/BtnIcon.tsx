import * as S from "./style/StyledBtnIcon";

interface Props {
  icon: JSX.Element;
  onClick: () => void;
}

const IconBtn = ({ icon, onClick }: Props) => {
  return <S.BtnIconLayout onClick={onClick}>{icon}</S.BtnIconLayout>;
};
export default IconBtn;
