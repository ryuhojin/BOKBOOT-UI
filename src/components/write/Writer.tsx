import { memo, useEffect, useRef, useMemo } from "react";

import * as S from "./style/StyledWrite";
import languageSwitch from "@/libs/utils/language";

//TODO 정리좀하자.. 다른걸로 갈아타던가..
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

interface Props {
  contents: string;
  language: string;
  theme: string;
  onChange: (content: string) => void;
}

const Writer = ({ contents, language, theme, onChange }: Props) => {
  const editor = useRef() as React.MutableRefObject<HTMLInputElement>;

  // CodeMirror Highlight Setting
  const HIGHLIGHTING = useMemo(() => {
    return theme === "dark"
      ? syntaxHighlighting(oneDarkHighlightStyle)
      : syntaxHighlighting(defaultHighlightStyle);
  }, [theme]);

  // CodeMirror Language Setting
  const LANGUAGING = useMemo(() => {
    return StreamLanguage.define(languageSwitch(language));
  }, [language]);

  //If language or theme will Change, Resetting Editor
  useEffect(() => {
    // CodeMirror Setting Package
    const Extensions = [
      minimalSetup,
      EditorView.updateListener.of((update) => {
        if (!update.docChanged) return;
        onChange(update.state.doc.toString());
      }),
      EditorView.theme({
        ".cm-content, .cm-gutter": { height: `calc(100vh - 160px)` },
        "&.cm-focused .cm-selectionBackground, ::selection": {
          backgroundColor: "rgba(255,208,0,0.7)",
        },
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
      parent: editor.current,
    });

    return () => {
      view.destroy();
    };
  }, [language, theme]);

  return (
    <S.WriteLayout>
      <S.WriteContainer ref={editor} />
    </S.WriteLayout>
  );
};
export default memo(Writer);
