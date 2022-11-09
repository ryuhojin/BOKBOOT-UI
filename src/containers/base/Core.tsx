import Dim from "@/components/base/Dim";
import Popup from "@/components/base/Popup";
import useDim from "@/libs/hooks/useDim";
import usePopup from "@/libs/hooks/usePopup";
import Message from "./Message";

const Core = () => {
  const [messages, , closePopup] = usePopup();
  const [isDim] = useDim();

  return (
    <>
      <Popup messages={messages} closePopup={closePopup} />
      <Dim isDim={isDim} />
      <Message />
    </>
  );
};

export default Core;
