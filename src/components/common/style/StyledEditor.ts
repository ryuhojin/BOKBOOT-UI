import styled from "styled-components";

const EditorLayout = styled.div`
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
    padding: 0 !important;
    background-color: ${(props) => props.theme.colors.basic2Color} !important;
  }
`;

const EditorContentsFront = styled.textarea`
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  border-radius: 0;
  outline: none;
  z-index: 8;
  position: absolute;
  padding: 4px;
  left: 0;
  top: 0;
  background: transparent;
  color: transparent;
  caret-color: ${(props) => props.theme.colors.defaultColor};
`;

export { EditorLayout, EditorContentsFront };
