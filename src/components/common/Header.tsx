import { memo } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import * as S from "./style/StyledHeader";

const Header = () => {
  return (
    <S.HeaderLayout>
      <S.HeaderLeftWrapper>
        <S.HeaderTitle>
          <Link to={"/"}>BOKBOOT</Link>
        </S.HeaderTitle>
        <S.HeaderDescription>COPY & PASTE AND SHARING CODE</S.HeaderDescription>
      </S.HeaderLeftWrapper>
      <S.HeaderRightWrapper>
        <Menu/>
      </S.HeaderRightWrapper>
    </S.HeaderLayout>
  );
};

export default memo(Header);
