import styled from "styled-components";

const ReaderLayout = styled.div`
  margin: 0 auto;
  max-width: 1140px;
  width: 100%;
`;

const ReaderContainer = styled.div`
  margin: 0 24px;
  background: ${(props) => props.theme.colors.editorColor};

  .cm-content {
    caret-color: ${(props) => props.theme.colors.titleColor};
  }
`;

export { ReaderLayout, ReaderContainer };
