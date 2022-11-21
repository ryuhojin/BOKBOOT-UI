import styled from "styled-components";

const CtnLayout = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50px;
  border: 1px solid ${(props) => props.theme.colors.pointColor};
  background-color: ${(props) => props.theme.colors.basic2Color};
`;

export { CtnLayout };
