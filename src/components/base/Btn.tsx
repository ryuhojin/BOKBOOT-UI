import * as S from "./style/StyledBtn";

interface Props {
  icon: JSX.Element;
  text: string;
}

const Btn = ({ icon, text }: Props) => {
  return (
    <S.BtnLayout>
      {icon}&nbsp;<span>{text}</span>
    </S.BtnLayout>
  );
};
export default Btn;
