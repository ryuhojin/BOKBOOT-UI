import * as S from "./style/StyledBtn";

interface Props {
  radius?: boolean;
  icon?: JSX.Element;
  text: string;
}

const Btn = ({ radius = false, icon, text, ...rest }: Props) => {
  return (
    <S.BtnLayout {...rest} radius={radius}>
      <S.BtnIcon>{icon}</S.BtnIcon>
      <S.BtnText>{text}</S.BtnText>
    </S.BtnLayout>
  );
};
export default Btn;
