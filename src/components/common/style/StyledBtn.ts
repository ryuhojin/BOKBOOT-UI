import styled, { css } from "styled-components";

const BtnLayout = styled.div<{ radius: boolean }>`
  padding: 5px 20px;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.radius &&
    css`
      border-radius: 25px;
    `}

  background: ${(props) => props.theme.colors.toggleColor};
  color: ${(props) => props.theme.colors.editorColor};
  box-shadow: 0px 0px 10px 1px ${(props) => props.theme.colors.shadowColor};
  cursor: pointer;
  div + div {
    margin-left: 10px;
  }
`;

const BtnIcon = styled.div`
  padding-top: 3px;
`;
const BtnText = styled.div``;

export { BtnLayout, BtnIcon, BtnText };
