import { Header, Footer } from "@/components/base";
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
