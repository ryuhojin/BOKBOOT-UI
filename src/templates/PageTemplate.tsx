import Header from "@/components/base/Header";
import * as S from "./style/StyledPageTemplate";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const PageTemplate = ({ children }: Props) => {
  return (
    <S.PageTemplateLayout>
      <Header />
      <S.PageTemplateContainer>{children}</S.PageTemplateContainer>
    </S.PageTemplateLayout>
  );
};
export default PageTemplate;