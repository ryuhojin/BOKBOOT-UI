import Footer from "@/components/base/Footer";
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
      <Footer />
    </S.PageTemplateLayout>
  );
};
export default PageTemplate;
