import styled, { css } from "styled-components";
import { popInFromBottom } from "@/styles/transition";

const ToastLayout = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 99999;
  left: 50%;
  bottom: 90px;
  div + div {
    margin-top: 10px;
  }
  transform: translate(-50%, 0);
  max-width: 90%;
`;

const ToastContainer = styled.div`
  background: ${(props) => props.theme.colors.toastBgColor};
  color: ${(props) => props.theme.colors.toastTextColor};
  padding: 10px 20px;
  border-radius: 5px;
  white-space: nowrap;
  ${() =>
    css`
      animation: ${popInFromBottom} 0.5s forwards ease-in-out;
    `}
`;

const ToastWrapper = styled.div``;

export { ToastLayout, ToastContainer, ToastWrapper };
