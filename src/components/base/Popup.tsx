import * as S from "./style/StyledPopup";
import { MdOutlineClose } from "react-icons/md";

interface Props {
  messages: string[];
  closePopup: (e: any) => void;
}
const Popup = ({ messages, closePopup }: Props) => {
  return messages.length ? (
    <S.PopupLayout onClick={(e) => closePopup(e)}>
      <S.PopupContainer>
        <S.PopupWrapperHeader>
          <span>HOW TO USE</span>
          <MdOutlineClose
            onClick={(e) => closePopup(e)}
            style={{ cursor: "pointer" }}
          />
        </S.PopupWrapperHeader>
        <S.PopupWrapperBody>
          {messages.map((v, i) => (
            <p key={i}>{v}</p>
          ))}
        </S.PopupWrapperBody>
        <S.PopupWrapperFooter>
          <span onClick={(e) => closePopup(e)} style={{ cursor: "pointer" }}>
            CLOSE
          </span>
        </S.PopupWrapperFooter>
      </S.PopupContainer>
    </S.PopupLayout>
  ) : (
    <></>
  );
};
export default Popup;
