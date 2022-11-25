import { useMulti } from "@/libs/hooks";
import MultiWriteContainer from "./MultiWriteContainer";
import SingleWriteContainer from "./SingleWriteContainer";

const WriterContainer = () => {
  const [multiMode] = useMulti();
  return !multiMode ? <MultiWriteContainer /> : <SingleWriteContainer />;
};
export default WriterContainer;
