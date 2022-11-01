import Toast from "@/components/base/Toast";
import useMessage from "@/libs/hooks/useMessage";

const Message = () => {
  const [messages, onMessages] = useMessage();
  return <Toast messages={messages} />;
};
export default Message;
