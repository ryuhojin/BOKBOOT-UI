import styled from "styled-components";

const MenuLayout = styled.div`
  width: 25px;
  height: 20px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5 ease-in-out;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: ${(props) => props.theme.colors.pointColor};
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
  }

  span:nth-child(1) {
    top: 0px;
  }

  span:nth-child(2),
  span:nth-child(3) {
    top: 8px;
  }

  span:nth-child(4) {
    top: 16px;
  }

  &.open span:nth-child(1) {
    top: 16px;
    width: 0%;
    left: 50%;
  }

  &.open span:nth-child(2) {
    transform: rotate(45deg);
  }

  &.open span:nth-child(3) {
    transform: rotate(-45deg);
  }

  &.open span:nth-child(4) {
    top: 16px;
    width: 0%;
    left: 50%;
  }
`;

export { MenuLayout };
