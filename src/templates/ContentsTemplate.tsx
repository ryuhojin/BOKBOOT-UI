import * as S from "./style/StyledContentsTemplate";

interface Props {
  children: JSX.Element | JSX.Element[];
  multiZone: JSX.Element;
  button: JSX.Element;
}
const ContentsTemplate = ({ children, button, multiZone }: Props) => {
  return (
    <S.ContentsLayout>
      <S.ContentsWrapper>{children}</S.ContentsWrapper>
      <S.ContentsMultiItemZone>{multiZone}</S.ContentsMultiItemZone>
      <S.ContentsBottom>{button}</S.ContentsBottom>
    </S.ContentsLayout>
  );
};
export default ContentsTemplate;
