import styled from "styled-components";

const FooterLayout = styled.footer`
  width: 100%;
  height: 40px;
`;

const FooterContainer = styled.div`
  max-width: 1140px;
  width: 100%;
  margin: calc((40px - 14.5px) / 2) auto;
`;

const FooterWrapper = styled.div`
  font-size: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
`;
export { FooterLayout, FooterContainer, FooterWrapper };
