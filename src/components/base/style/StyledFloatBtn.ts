import styled from "styled-components";

const FloatBtnLayout = styled.div`
  width: 80px;
  height: 36px;
  z-index: 9999;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  margin: 0 24px 24px 0;
  background: ${(props) => props.theme.colors.titleColor};
  position: absolute;
`;
export { FloatBtnLayout };
