import styled from "styled-components";

const EditorLoaderContainer = styled.div`
  margin: 0;
  flex-grow: 2;
  flex-shrink: 0;
  min-height: 100%;
  display: block;
  white-space: pre;
  word-wrap: normal;
  box-sizing: border-box;
  padding: 4px 0;
  outline: none;
  height: calc(100vh - 160px);
  tab-size: 4;
  display: flex;
`;

const EditorLoaderWrapper = styled.div`
  flex-grow: 1;
  margin: 0 24px;
  background: ${(props) => props.theme.colors.editorColor};
`;
export { EditorLoaderContainer, EditorLoaderWrapper };
