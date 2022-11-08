import { lazy, memo, Suspense } from "react";
import EditorLoader from "@/components/base/EditorLoader";

import * as S from "./style/StyledWrite";
const Editor = lazy(() => import("@/components/base/Editor"));

interface Props {
  contents: string;
  language: string;
  theme: string;
  onChange: (content: string) => void;
}

const Writer = ({ contents, language, theme, onChange }: Props) => {
  return (
    <S.WriteLayout>
      <Suspense fallback={<EditorLoader />}>
        <Editor
          contents={contents}
          theme={theme}
          language={language}
          onChange={onChange}
        />
      </Suspense>
    </S.WriteLayout>
  );
};
export default memo(Writer);
