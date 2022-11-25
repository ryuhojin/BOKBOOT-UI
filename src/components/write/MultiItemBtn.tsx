import * as S from "./style/StyledMenuItemBtn";
interface Props {
  children: JSX.Element;
  onClick: () => void;
}
const MultiItemBtn = ({ children, onClick }: Props) => {
  return (
    <S.MenuItemBtnLayout>
      <div onClick={onClick}>{children}</div>
    </S.MenuItemBtnLayout>
  );
};
export default MultiItemBtn;
