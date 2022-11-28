import { useEffect } from "react";
import * as S from "./style/StyledMultiItem";

interface Props {
  children: JSX.Element | JSX.Element[];
  index: number;
  total: number;
}
const MultiItem = ({ children, index, total }: Props) => {
  return (
    <S.MultiItemLayout>
      <S.MultiItemPage>
        PAGE : {index} / {total}
      </S.MultiItemPage>
      <S.MultiItemGroup>{children}</S.MultiItemGroup>
    </S.MultiItemLayout>
  );
};
export default MultiItem;
