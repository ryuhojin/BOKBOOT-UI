import { useEffect, useRef } from "react";
import { EditorState } from "@codemirror/state";
import { EditorView, keymap } from "@codemirror/view";
import { defaultKeymap, indentWithTab } from "@codemirror/commands";
import * as S from "./style/StyledWrite";

interface Props {
  contents: string;
  onChange: (content: string) => void;
}
const Writer = ({ contents, onChange }: Props) => {
  const editor = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    const startState = EditorState.create({
      doc: contents,
      extensions: [
        keymap.of([...defaultKeymap, indentWithTab]),
        EditorView.updateListener.of((update) => {
          if (!update.docChanged) return;
          onChange(update.state.doc.toString());
        }),
        EditorView.theme({
          ".cm-content, .cm-gutter": { height: `calc(100vh - 160px)` },
        }),
      ],
    });

    const view = new EditorView({
      state: startState,
      parent: editor.current,
    });

    return () => {
      view.destroy();
    };
  }, []);

  return (
    <S.WriteLayout>
      <S.WriteContainer ref={editor} />
    </S.WriteLayout>
  );
};
export default Writer;
