import Toast from "@/components/base/Toast";
import { messageState } from "@/libs/store/atom";
import { useRecoilValue } from "recoil";

const Message = () => {
  const msgState = useRecoilValue(messageState);
  if (!msgState.visible) return null;
  return <Toast message={msgState.message} visible={msgState.visible} />;
};
export default Message;
