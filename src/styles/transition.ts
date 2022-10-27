import { keyframes } from "styled-components";

const popInFromBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(80px) scale(0.75);
  }
  75% {
    opacity: 1;
    transform: translateY(-16px) scale(1.0);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }`;

const popOutToBottom = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0px) scale(1.0);
  }
  100% {
    opacity: 0;
    transform: translateY(80px) scale(0.75);
  }`;

export { popInFromBottom, popOutToBottom };
