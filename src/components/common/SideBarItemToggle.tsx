import { memo } from "react";
import * as S from "./style/StyledSideBarItemToggle";
interface Props {
  value: boolean;
  onToggle: () => void;
}
const SideBarItemToggle = ({ value, onToggle }: Props) => {
  return (
    <S.SideBarItemToggleLayout>
      <S.SideBarItemToggleCheckBox
        type={"checkbox"}
        onChange={onToggle}
        checked={value}
      />
      <S.SideBarItemToggleSlider className="slider" />
    </S.SideBarItemToggleLayout>
  );
};
export default memo(SideBarItemToggle);
