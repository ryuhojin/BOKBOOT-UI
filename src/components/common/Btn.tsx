import * as S from "./style/StyledBtn";

interface Props {
  radius?: boolean;
  icon?: JSX.Element;
  text: string;
  onClick: () => void;
}

const Btn = ({ radius, icon, text, onClick }: Props) => {
  return (
    <S.BtnLayout onClick={onClick} radius={radius}>
      <S.BtnIcon>{icon}</S.BtnIcon>
      <S.BtnText>{text}</S.BtnText>
    </S.BtnLayout>
  );
};
export default Btn;
