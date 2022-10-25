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
          <S.HeaderDarkModeWrapper>
            <input
              id="darkMode"
              type={"checkbox"}
              checked={theme.colors.bgColor !== "#fff" ? true : false}
              onChange={onToggle}
            />
            <label htmlFor="darkMode"></label>
          </S.HeaderDarkModeWrapper>
        </S.HeaderWrapper>
      </S.HeaderContainer>
    </S.HaaderLayout>
  );
};
export default Header;
