import styled from "styled-components";

const BTemplateLayout = styled.div`
  background-color: ${(props) => props.theme.colors.backColor};
  color: ${(props) => props.theme.colors.defaultColor};
  height: 100vh;
`;

const BTemplateWrapper = styled.div`
  margin: 0 auto;
  max-width: 1140px;
  padding: 0 16px;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const BTemplateContainer = styled.div`
  flex-grow: 1;
  display: flex;
`;

export { BTemplateLayout, BTemplateWrapper, BTemplateContainer };
