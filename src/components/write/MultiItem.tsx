import MultiItemBtn from "./MultiItemBtn";
import * as S from "./style/StyledMultiItem";
import {
  MdPlusOne,
  MdOutlineDelete,
  MdOutlineChevronLeft,
  MdOutlineChevronRight,
} from "react-icons/md";
const MultiItem = () => {
  return (
    <S.MultiItemLayout>
      <S.MultiItemPage>PAGE : 1 / 1</S.MultiItemPage>
      <S.MultiItemGroup>
        <MultiItemBtn>
          <MdPlusOne />
        </MultiItemBtn>
        <MultiItemBtn>
          <MdOutlineDelete />
        </MultiItemBtn>
        <MultiItemBtn>
          <MdOutlineChevronLeft />
        </MultiItemBtn>
        <MultiItemBtn>
          <MdOutlineChevronRight />
        </MultiItemBtn>
      </S.MultiItemGroup>
    </S.MultiItemLayout>
  );
};
export default MultiItem;
