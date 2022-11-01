import { memo } from "react";
import * as S from "./style/StyleToast";

interface Props {
  messages: string[];
}

const Toast = memo(({ messages }: Props) => {
  return (
    <S.ToastLayout>
      {messages.map((v, i) => {
        return (
          <S.ToastContainer key={i}>
            <S.ToastWrapper>{v}</S.ToastWrapper>
          </S.ToastContainer>
        );
      })}
    </S.ToastLayout>
  );
});

export default Toast;
