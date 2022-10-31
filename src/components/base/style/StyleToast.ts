import styled, { css } from "styled-components";

const ToastLayout = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 99999;
  left: 50%;
  bottom: 8%;
  div + div {
    margin-top: 10px;
  }
  transform: translate(-50%, -8%);
  max-width: 90%;
`;

const ToastContainer = styled.div`
  background: ${(props) => props.theme.colors.toastBgColor};
  color: ${(props) => props.theme.colors.toastTextColor};
  padding: 10px 20px;
  border-radius: 5px;
  white-space: nowrap;
`;

const ToastWrapper = styled.div``;
export { ToastLayout, ToastContainer, ToastWrapper };
