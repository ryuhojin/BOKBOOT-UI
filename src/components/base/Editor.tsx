import { memo, useEffect, useRef, useMemo, lazy } from "react";

import * as S from "./style/StyledEditor";
import { EditorState } from "@codemirror/state";
import { minimalSetup } from "codemirror";
import { EditorView, keymap } from "@codemirror/view";
import { defaultKeymap, indentWithTab } from "@codemirror/commands";
import {
  syntaxHighlighting,
  StreamLanguage,
  defaultHighlightStyle,
} from "@codemirror/language";
import { oneDarkHighlightStyle } from "@codemirror/theme-one-dark";

import languageSwitch from "@/libs/utils/language";

interface Props {
  contents: string;
  language: string;
  theme: string;
  onChange?: (content: string) => void;
}

const Editor = ({ contents, language, theme, onChange }: Props) => {
  const editor = useRef() as React.MutableRefObject<HTMLInputElement>;

  const EX_LANGUAGE = useMemo(() => {
    return StreamLanguage.define(languageSwitch(language));
  }, [language]);

  const EX_HIGHLIGHTS = useMemo(() => {
    return theme === "dark"
      ? syntaxHighlighting(oneDarkHighlightStyle)
      : syntaxHighlighting(defaultHighlightStyle);
  }, [theme]);

  const EXTENSIONS = useMemo(() => {
    const EX_UPDATE = onChange
      ? EditorView.editable.of(true)
      : EditorView.editable.of(false);

    return [
      minimalSetup,
      EditorView.updateListener.of((update) => {
        if (!update.docChanged || !onChange) return;
        onChange(update.state.doc.toString());
      }),
      EditorView.theme({
        ".cm-content, .cm-gutter": { height: `calc(100vh - 160px)` },
        "&.cm-focused .cm-selectionBackground, ::selection": {
          backgroundColor: "rgba(255,208,0,0.7)",
        },
      }),
      keymap.of([...defaultKeymap, indentWithTab]),
      EX_LANGUAGE,
      EX_HIGHLIGHTS,
      EX_UPDATE,
    ];
  }, [EX_LANGUAGE, EX_HIGHLIGHTS]);

  useEffect(() => {
    const view = new EditorView({
      state: EditorState.create({
        doc: contents,
        extensions: EXTENSIONS,
      }),
      parent: editor.current,
    });

    return () => {
      view.destroy();
    };
  }, [language, theme]);

  return <S.EditorContainer ref={editor} />;
};
export default memo(Editor);
