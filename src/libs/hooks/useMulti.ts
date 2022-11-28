import { useCallback, useMemo } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  contentsState,
  contentState,
  languageState,
  settingState,
} from "../store/atom";

const useMulti = () => {
  const [setting, setSetting] = useRecoilState(settingState);
  const setContent = useSetRecoilState(contentState);
  const setLanguage = useSetRecoilState(languageState);
  const setContents = useSetRecoilState(contentsState);
  const multiMode = useMemo(() => setting.multiMode, [setting]);

  const onToggle = useCallback(() => {
    if (setting.multiMode) {
      setContent("");
      setLanguage("Unknown");
      setContents({
        contents: [""],
        languages: ["Unknown"],
        index: 0,
      });
    }
    setSetting({
      ...setting,
      multiMode: !setting.multiMode,
    });
  }, [setting]);

  return [multiMode, onToggle] as [typeof multiMode, typeof onToggle];
};

export default useMulti;
