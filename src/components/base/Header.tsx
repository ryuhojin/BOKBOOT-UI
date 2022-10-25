import useTheme from "@/libs/hooks/useTheme";
import * as S from "./style/StyledHeader";

const Header = () => {
  const [theme, onToggle] = useTheme();
  return (
    <S.HaaderLayout>
      <S.HeaderContainer>
        <S.HeaderWrapper>
          <S.HeaderLeft>
            <S.HeaderTitle>BOKBOOT</S.HeaderTitle>
            <S.HeaderDescription>
              COPY & PASTE AND SHARING CODE
            </S.HeaderDescription>
          </S.HeaderLeft>
          <S.HeaderDarkMode onClick={onToggle}></S.HeaderDarkMode>
        </S.HeaderWrapper>
      </S.HeaderContainer>
    </S.HaaderLayout>
  );
};
export default Header;
