import SideBarItemToggle from "./SideBarItemToggle";
import * as S from "./style/StyledSideBarItem";
interface Props {
  title: string;
  onToggle: () => void;
  value: boolean;
}
const SideBarItem = ({ title, onToggle, value }: Props) => {
  return (
    <S.SideBarItemLayout>
      <S.SideBarItemContainer>
        <S.SideBarItemTitle>{title}</S.SideBarItemTitle>
        <S.SideBarItemWrapper>
          <SideBarItemToggle
            onToggle={onToggle}
            value={value}
          ></SideBarItemToggle>
        </S.SideBarItemWrapper>
      </S.SideBarItemContainer>
    </S.SideBarItemLayout>
  );
};
export default SideBarItem;
