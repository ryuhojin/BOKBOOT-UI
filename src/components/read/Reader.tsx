import { memo, useEffect, useRef, useMemo } from "react";
import { defaultKeymap, indentWithTab } from "@codemirror/commands";
import { EditorState } from "@codemirror/state";
import { EditorView, keymap } from "@codemirror/view";
import * as S from "./style/StyledRead";
import languageSwitch from "@/libs/utils/language";

import {
  syntaxHighlighting,
  StreamLanguage,
  defaultHighlightStyle,
} from "@codemirror/language";
import { oneDarkHighlightStyle } from "@codemirror/theme-one-dark";
import { minimalSetup } from "codemirror";

interface Props {
  contents: string;
  language: string;
  theme: string;
}

const Reader = ({ contents, language, theme }: Props) => {
  const HIGHLIGHTING = useMemo(() => {
    return theme === "dark"
      ? syntaxHighlighting(oneDarkHighlightStyle)
      : syntaxHighlighting(defaultHighlightStyle);
  }, [theme]);

  const LANGUAGING = useMemo(() => {
    return StreamLanguage.define(languageSwitch(language));
  }, [language]);

  const reader = useRef() as React.MutableRefObject<HTMLInputElement>;
  useEffect(() => {
    const Extensions = [
      minimalSetup,
      EditorView.theme({
        ".cm-content, .cm-gutter": { height: `calc(100vh - 160px)` },
        "&.cm-focused .cm-selectionBackground, ::selection": {
          backgroundColor: "rgba(255,208,0,0.7)",
        },
      }),
      EditorView.contentAttributes.of({
        contenteditable: "false",
      }),
      keymap.of([...defaultKeymap, indentWithTab]),
      LANGUAGING,
      HIGHLIGHTING,
    ];

    const startState = EditorState.create({
      doc: contents,
      extensions: Extensions,
    });

    const view = new EditorView({
      state: startState,
      parent: reader.current,
    });

    return () => {
      view.destroy();
    };
  }, [language, theme]);

  return (
    <S.ReaderLayout>
      <S.ReaderContainer ref={reader} />
    </S.ReaderLayout>
  );
};
export default memo(Reader);
