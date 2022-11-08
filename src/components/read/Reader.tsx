import { memo, Suspense, lazy } from "react";
import EditorLoader from "@/components/base/EditorLoader";

import * as S from "./style/StyledRead";
const Editor = lazy(() => import("@/components/base/Editor"));

interface Props {
  contents: string;
  language: string;
  theme: string;
}

const Reader = ({ contents, language, theme }: Props) => {
  return (
    <S.ReaderLayout>
      <Suspense fallback={<EditorLoader />}>
        <Editor contents={contents} theme={theme} language={language} />
      </Suspense>
    </S.ReaderLayout>
  );
};
export default memo(Reader);
