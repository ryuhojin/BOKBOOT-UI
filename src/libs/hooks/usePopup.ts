import { useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import { dimState, popupState } from "../store/atom";
import useDim from "./useDim";

const usePopup = () => {
  const [messages, setMessages] = useRecoilState(popupState);
  const [, setIsDim] = useRecoilState(dimState);
  const [, showDim, closeDim] = useDim();

  const showPopup = useCallback((message: string[]) => {
    setIsDim(true);
    setMessages(message);
  }, []);

  const closePopup = useCallback((e: any) => {
    if (e.currentTarget == e.target) {
      setIsDim(false);
      setMessages([]);
    }
  }, []);
  return [messages, showPopup, closePopup] as [
    typeof messages,
    typeof showPopup,
    typeof closePopup
  ];
};
export default usePopup;
