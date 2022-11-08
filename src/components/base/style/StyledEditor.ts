import styled from "styled-components";

const EditorContainer = styled.div`
  margin: 0 24px;
  background: ${(props) => props.theme.colors.editorColor};
  * {
    caret-color: ${(props) => props.theme.colors.titleColor} !important;
  }
`;

export { EditorContainer };
