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
  border : 1px solid ${(props) => props.theme.colors.pointColor};
  box-shadow: 0px 0px 5px 1px ${(props) => props.theme.colors.shadowColor};
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
