import { memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsQuestionCircle } from "react-icons/bs";

import { useTheme, usePopup } from "@/libs/hooks";
import BtnIcon from "./BtnIcon";
import * as S from "./style/StyledHeader";

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
              <Link to={"/"}>BOKBOOT</Link>
            </S.HeaderTitle>
            <S.HeaderDescription>
              COPY & PASTE AND SHARING CODE&nbsp;
              <S.HeaderDescriptionMode>
                {location.pathname == "/" ? "[ W ]" : "[ R ]"}
              </S.HeaderDescriptionMode>
            </S.HeaderDescription>
          </S.HeaderLeft>
          <S.HeaderRight>
            <BtnIcon
              icon={<BsQuestionCircle />}
              onClick={() => {
                showPopup([
                  "1. Paste the source code into the editor.",
                  "2. Click the share button to create a link on the clipboard.",
                  "3. Send the link to the person you want to share with.",
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
export default memo(Header);
