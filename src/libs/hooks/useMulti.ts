import { useCallback, useMemo } from "react";
import { useRecoilState } from "recoil";
import { settingState } from "../store/atom";

const useMulti = () => {
  const [setting, setSetting] = useRecoilState(settingState);

  const multiMode = useMemo(() => setting.multiMode, [setting]);

  const onToggle = useCallback(() => {
    setSetting({
      ...setting,
      multiMode: !setting.multiMode,
    });
  }, [setting]);

  return [multiMode, onToggle] as [typeof multiMode, typeof onToggle];
};

export default useMulti;
