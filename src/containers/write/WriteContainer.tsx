import FloatBtn from "@/components/base/FloatBtn";
import Writer from "@/components/write/Writer";
import useContent from "@/libs/hooks/useContent";

const WriteContainer = () => {
  const [contents, onChange] = useContent("");
  return (
    <>
      <Writer contents={contents} onChange={onChange} />
      {/* <FloatBtn /> */}
    </>
  );
};
export default WriteContainer;
