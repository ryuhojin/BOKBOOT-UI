import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { dimState, popupState } from "../store/atom";

const useDim = () => {
  const [isDim, setIsDim] = useRecoilState(dimState);
  const [, setMessages] = useRecoilState(popupState);

  const showDim = useCallback(() => setIsDim(true), []);
  const closeDim = useCallback(() => {
    setMessages([]);
    setIsDim(false);
  }, []);

  return [isDim, showDim, closeDim] as [
    typeof isDim,
    typeof showDim,
    typeof closeDim
  ];
};
export default useDim;
