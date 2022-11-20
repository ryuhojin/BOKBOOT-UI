import useMenu from "./hooks/useMenu";
import * as S from "./style/StyledMenu";

const Menu = () => {
  const [isOpen, onToggle] = useMenu();
  return (
    <S.MenuLayout
      className={isOpen ? "open" : ""}
      onClick={onToggle}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </S.MenuLayout>
  );
};
export default Menu;
