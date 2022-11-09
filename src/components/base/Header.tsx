import useTheme from "@/libs/hooks/useTheme";
import { Link, useLocation } from "react-router-dom";
import BtnIcon from "./BtnIcon";
import * as S from "./style/StyledHeader";
import { BsQuestionCircle } from "react-icons/bs";
import usePopup from "@/libs/hooks/usePopup";
const Header = () => {
  const [theme, onToggle] = useTheme();
  const [, showPopup] = usePopup();
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
            <BtnIcon
              icon={<BsQuestionCircle />}
              onClick={() => {
                showPopup([
                  "1. 소스코드를 에디터에 붙여넣기 합니다.",
                  "2. Share버튼을 눌러주세요. 클립보드에 주소가 복사됩니다.",
                  "3. 공유받을 사람에게 복사된 주소를 공유하세요.",
                ]);
              }}
            />
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
