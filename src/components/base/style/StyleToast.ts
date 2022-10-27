import styled, { css } from "styled-components";
import { popOutToBottom, popInFromBottom } from "@/styles/transition";
const ToastLayout = styled.div<{ visible: boolean }>`
  margin: 0 auto;
  position: absolute;
  z-index: 99999;
  width: 100%;
  display: flex;
  justify-content: center;
  bottom: 80px;
`;

const ToastContainer = styled.div`
  background: ${(props) => props.theme.colors.toastBgColor};
  padding: 10px 20px;
  border-radius: 5px;
  color: ${(props) => props.theme.colors.toastTextColor};
`;
export { ToastLayout, ToastContainer };
