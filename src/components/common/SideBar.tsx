import useMenu from "./hooks/useMenu";
import * as S from "./style/StyledSideBar";
const SideBar = () => {
  const [isOpen, onToggle] = useMenu();
  return (
    <S.SideBarLayout>
      <S.SideBarContainer className={isOpen ? "open" : ""}></S.SideBarContainer>
    </S.SideBarLayout>
  );
};
export default SideBar;
