import { memo, useEffect, useRef } from "react";
import { defaultKeymap, indentWithTab } from "@codemirror/commands";
import { EditorState } from "@codemirror/state";
import { EditorView, keymap } from "@codemirror/view";
import * as S from "./style/StyledRead";

interface Props {
  contents: string;
}

const Reader = ({ contents }: Props) => {
  const reader = useRef() as React.MutableRefObject<HTMLInputElement>;
  useEffect(() => {
    const startState = EditorState.create({
      doc: contents,
      extensions: [
        keymap.of([...defaultKeymap, indentWithTab]),
        // EditorView.updateListener.of((update) => {
        //   if (!update.docChanged) return;
        //   onChange(update.state.doc.toString());
        // }), 읽기전용이라 비활성화
        // TODO 추후 편집 후 재공유 기능 생성시 활성화
        EditorView.theme({
          ".cm-content, .cm-gutter": { height: `calc(100vh - 160px)` },
          "&.cm-focused .cm-selectionBackground, ::selection": {
            backgroundColor: "rgba(255,208,0,0.5)",
          },
        }),
        EditorView.contentAttributes.of({
          contenteditable: "false",
        }),
      ],
    });

    const view = new EditorView({
      state: startState,
      parent: reader.current,
    });

    return () => {
      view.destroy();
    };
  }, [contents]);

  return (
    <S.ReaderLayout>
      <S.ReaderContainer ref={reader} />
    </S.ReaderLayout>
  );
};
export default memo(Reader);
