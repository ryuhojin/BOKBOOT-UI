import styled from "styled-components";

const HaaderLayout = styled.header`
  width: 100%;
  height: 60px;
  position: fixed;
  background: rgba(255, 255, 255, 0.1);
`;
const HeaderContainer = styled.div`
  max-width: 1140px;
  width: 100%;
  height: 100%;
  margin: auto;
`;
const HeaderWrapper = styled.div`
  padding: 0 24px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export { HaaderLayout, HeaderContainer, HeaderWrapper };
