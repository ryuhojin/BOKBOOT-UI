import styled from "styled-components";

const EditorLayout = styled.div`
  background-color: ${(props) => props.theme.colors.basic2Color};
  color: ${(props) => props.theme.colors.defaultColor};
  width: 100%;
  height: 100%;
  position: relative;
`;
const EditorContentBackCode = styled.code`
  width: 100%;
  height: 100%;
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
  left: 0;
  top: 0;
  background: transparent;
  color: transparent;
  caret-color: ${(props) => props.theme.colors.defaultColor};
`;

const EditorContentsBack = styled.pre`
  margin: 0;
  width: 100%;
  height: 100%;
`;

export {
  EditorLayout,
  EditorContentsFront,
  EditorContentsBack,
  EditorContentBackCode,
};
