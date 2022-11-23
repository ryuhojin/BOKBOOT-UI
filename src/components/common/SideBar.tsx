import { useTheme } from "@/libs/hooks";
import useMenu from "./hooks/useMenu";
import SideBarItem from "./SideBarItem";
import * as S from "./style/StyledSideBar";
const SideBar = () => {
  const [isOpen] = useMenu();
  const [, onToggleTheme, themeMode] = useTheme();
  return (
    <S.SideBarLayout>
      <S.SideBarContainer className={isOpen ? "open" : ""}>
        <S.SideBarWrapper>
          <SideBarItem
            title="DARK MODE"
            onToggle={onToggleTheme}
            value={themeMode == "dark" ? true : false}
          />
        </S.SideBarWrapper>
      </S.SideBarContainer>
    </S.SideBarLayout>
  );
};
export default SideBar;
