import * as S from "./style/StyledMenuItemBtn";

interface Props {
  children: JSX.Element;
  onClick: () => void;
}
const MultiItemBtn = ({ children, onClick }: Props) => {
  return (
    <S.MenuItemBtnLayout onClick={onClick}>
      <div>{children}</div>
    </S.MenuItemBtnLayout>
  );
};
export default MultiItemBtn;
