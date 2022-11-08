import useTheme from "@/libs/hooks/useTheme";
import { Link, useLocation } from "react-router-dom";
import BtnIcon from "./BtnIcon";
import * as S from "./style/StyledHeader";
import { BsQuestionCircle } from "react-icons/bs";
const Header = () => {
  const [theme, onToggle] = useTheme();
  const location = useLocation();
  return (
    <S.HaaderLayout>
      <S.HeaderContainer>
        <S.HeaderWrapper>
          <S.HeaderLeft>
            <S.HeaderTitle>
              <Link to={"/"}>
                {location.pathname == "/" ? "BOKBOOT - W" : "BOKBOOT - R"}
              </Link>
            </S.HeaderTitle>
            <S.HeaderDescription>
              COPY & PASTE AND SHARING CODE
            </S.HeaderDescription>
          </S.HeaderLeft>
          <S.HeaderRight>
            <BtnIcon icon={<BsQuestionCircle />} />
            <S.HeaderDarkModeWrapper>
              <input
                id="darkMode"
                type={"checkbox"}
                checked={theme.colors.bgColor !== "#fff" ? true : false}
                onChange={onToggle}
              />
              <label htmlFor="darkMode"></label>
            </S.HeaderDarkModeWrapper>
          </S.HeaderRight>
        </S.HeaderWrapper>
      </S.HeaderContainer>
    </S.HaaderLayout>
  );
};
export default Header;
