import { Header, Footer } from "@/components/common";
import * as S from "./style/StyledBaseTemplate";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const BaseTemplate = ({ children }: Props) => {
  return (
    <S.BTemplateLayout>
      <S.BTemplateWrapper>
        <Header />
        <S.BTemplateContainer>{children}</S.BTemplateContainer>
        <Footer />
      </S.BTemplateWrapper>
    </S.BTemplateLayout>
  );
};
export default BaseTemplate;
