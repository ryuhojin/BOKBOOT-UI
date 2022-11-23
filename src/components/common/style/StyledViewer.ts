import styled from "styled-components";

const ViewerLayout = styled.div`
  background-color: ${(props) => props.theme.colors.basic2Color};
  color: ${(props) => props.theme.colors.defaultColor};
  width: 100%;
  height: 100%;
  position: relative;
  pre {
    margin: 0;
    width: 100%;
    height: 100%;
    padding: 5px !important;
  }
  code {
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.basic2Color};
  }
`;

export { ViewerLayout };
