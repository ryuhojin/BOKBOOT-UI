import Reader from "@/components/read/Reader";
import ReadBtn from "@/components/read/ReaderBtn";
import useContent from "@/libs/hooks/useContent";

const ReadContainer = () => {
  const [contents, onChange] = useContent("읽기전용 테스트 완료");
  return (
    <>
      <Reader contents={contents} />
      <ReadBtn />
    </>
  );
};
export default ReadContainer;
