import * as S from "./style/StyledContentTemplate";

interface Props {
  children: JSX.Element | JSX.Element[];
  button: JSX.Element;
}
const ContentTemplate = ({ children, button }: Props) => {
  return (
    <S.ContentLayout>
      <S.ContentWrapper>{children}</S.ContentWrapper>
      <S.ContentBottom>{button}</S.ContentBottom>
    </S.ContentLayout>
  );
};
export default ContentTemplate;
