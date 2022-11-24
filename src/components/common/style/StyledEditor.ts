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

  pre code.hljs {
    display: block;
    overflow-x: auto;
    padding: 1em;
  }
  code.hljs {
    padding: 3px 5px;
  }
  .hljs {
    color: ${(props) => props.theme.editor.color};
    background: ${(props) => props.theme.editor.background};
  }
  .hljs-doctag,
  .hljs-keyword,
  .hljs-meta .hljs-keyword,
  .hljs-template-tag,
  .hljs-template-variable,
  .hljs-type,
  .hljs-variable.language_ {
    color: ${(props) => props.theme.editor.color1};
  }
  .hljs-title,
  .hljs-title.class_,
  .hljs-title.class_.inherited__,
  .hljs-title.function_ {
    color: ${(props) => props.theme.editor.color2};
  }
  .hljs-attr,
  .hljs-attribute,
  .hljs-literal,
  .hljs-meta,
  .hljs-number,
  .hljs-operator,
  .hljs-selector-attr,
  .hljs-selector-class,
  .hljs-selector-id,
  .hljs-variable {
    color: ${(props) => props.theme.editor.color3};
  }
  .hljs-meta .hljs-string,
  .hljs-regexp,
  .hljs-string {
    color: ${(props) => props.theme.editor.color4};
  }
  .hljs-built_in,
  .hljs-symbol {
    color: ${(props) => props.theme.editor.color5};
  }
  .hljs-code,
  .hljs-comment,
  .hljs-formula {
    color: ${(props) => props.theme.editor.color6};
  }
  .hljs-name,
  .hljs-quote,
  .hljs-selector-pseudo,
  .hljs-selector-tag {
    color: ${(props) => props.theme.editor.color7};
  }
  .hljs-subst {
    color: ${(props) => props.theme.editor.color};
  }
  .hljs-section {
    color: ${(props) => props.theme.editor.color8};
    font-weight: 700;
  }
  .hljs-bullet {
    color: ${(props) => props.theme.editor.color9};
  }
  .hljs-emphasis {
    color: ${(props) => props.theme.editor.color};
    font-style: italic;
  }
  .hljs-strong {
    color: ${(props) => props.theme.editor.color};
    font-weight: 700;
  }
  .hljs-addition {
    color: ${(props) => props.theme.editor.color10};
    background-color: ${(props) => props.theme.editor.color11};
  }
  .hljs-deletion {
    color: ${(props) => props.theme.editor.color12};
    background-color: ${(props) => props.theme.editor.color13};
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
