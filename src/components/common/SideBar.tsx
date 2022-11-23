import useMenu from "./hooks/useMenu";
import SideBarItem from "./SideBarItem";
import * as S from "./style/StyledSideBar";
const SideBar = () => {
  const [isOpen, onToggle] = useMenu();
  return (
    <S.SideBarLayout>
      <S.SideBarContainer className={isOpen ? "open" : ""}>
        <S.SideBarWrapper>
          <SideBarItem></SideBarItem>
        </S.SideBarWrapper>
      </S.SideBarContainer>
    </S.SideBarLayout>
  );
};
export default SideBar;
