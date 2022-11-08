import * as S from "./style/StyledPopup";
import { MdOutlineClose } from "react-icons/md";
interface Props {
  children: JSX.Element | JSX.Element[];
}
const Popup = ({ children }: Props) => {
  return (
    <S.PopupLayout>
      <S.PopupContainer>
        <S.PopupWrapperHeader>
          <span>Notice</span>
          <MdOutlineClose />
        </S.PopupWrapperHeader>
        <S.PopupWrapperBody>{children}</S.PopupWrapperBody>
        <S.PopupWrapperFooter>
          <span>Close</span>
        </S.PopupWrapperFooter>
      </S.PopupContainer>
    </S.PopupLayout>
  );
};
export default Popup;
