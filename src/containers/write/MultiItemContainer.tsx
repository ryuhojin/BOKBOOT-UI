import MultiItem from "@/components/write/MultiItem";
import {
  MdPlusOne,
  MdOutlineDelete,
  MdOutlineChevronLeft,
  MdOutlineChevronRight,
} from "react-icons/md";
import MultiItemBtn from "@/components/write/MultiItemBtn";
import useContents from "@/libs/hooks/useContents";

const MultiItemContainer = () => {
  const [, , index, total, , onPlus, onDelete, nextPage, prevPage] =
    useContents();
  return (
    <MultiItem index={index + 1} total={total}>
      <MultiItemBtn onClick={onPlus}>
        <MdPlusOne />
      </MultiItemBtn>
      <MultiItemBtn onClick={onDelete}>
        <MdOutlineDelete />
      </MultiItemBtn>
      <MultiItemBtn onClick={prevPage}>
        <MdOutlineChevronLeft />
      </MultiItemBtn>
      <MultiItemBtn onClick={nextPage}>
        <MdOutlineChevronRight />
      </MultiItemBtn>
    </MultiItem>
  );
};
export default MultiItemContainer;
