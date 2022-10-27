import * as S from "./style/StyleToast";

interface Props {
  message: string;
  visible: boolean;
}

const Toast = ({ message, visible }: Props) => {
  return (
    <S.ToastLayout visible={visible}>
      <S.ToastContainer>{message}</S.ToastContainer>
    </S.ToastLayout>
  );
};
export default Toast;
