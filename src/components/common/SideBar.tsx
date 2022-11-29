import { useTheme, useMulti } from "@/libs/hooks";
import { memo, useEffect } from "react";
import useMenu from "./hooks/useMenu";
import SideBarItem from "./SideBarItem";
import * as S from "./style/StyledSideBar";

interface Props {
  type: string;
}
const SideBar = ({ type }: Props) => {
  const [isOpen] = useMenu();
  const [, onToggleTheme, themeMode] = useTheme();
  const [multiMode, onToggleMulti] = useMulti();

  return (
    <S.SideBarLayout>
      <S.SideBarContainer className={isOpen ? "open" : ""}>
        <S.SideBarWrapper>
          <SideBarItem
            title="DARK MODE"
            onToggle={onToggleTheme}
            value={themeMode == "dark" ? true : false}
          />
          {type == "write" ? (
            <SideBarItem
              title="MULTI MODE"
              onToggle={onToggleMulti}
              value={multiMode}
            />
          ) : (
            <></>
          )}
        </S.SideBarWrapper>
      </S.SideBarContainer>
    </S.SideBarLayout>
  );
};
export default memo(SideBar);
