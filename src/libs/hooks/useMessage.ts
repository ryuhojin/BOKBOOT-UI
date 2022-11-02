import { useEffect } from "react";
import { useRecoilCallback, useRecoilState } from "recoil";
import { messageState } from "../store/atom";

const useMessage = () => {
  const [messages, setMessages] = useRecoilState(messageState);

  const onMessages = useRecoilCallback(() => (message: string) => {
    setMessages((messages) => [...messages, message]);
  });

  useEffect(() => {
    const interval = setTimeout(() => {
      const [first, ...left] = messages;
      setMessages(() => [...left]);
    }, 1500);
    return () => {
      clearTimeout(interval);
    };
  }, [messages]);

  return [messages, onMessages] as [typeof messages, typeof onMessages];
};

export default useMessage;
