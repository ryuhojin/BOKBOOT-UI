import styled from "styled-components";

const PageTemplateLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.bgColor};
  color: ${(props) => props.theme.colors.fontColor};
`;
const PageTemplateBumper = styled.div`
  height: 60px;
`;
const PageTemplateContainer = styled.main`
  flex-grow: 1;
`;
export { PageTemplateLayout, PageTemplateBumper, PageTemplateContainer };
