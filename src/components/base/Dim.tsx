import * as S from "./style/StyledDim";
interface Props {
  isDim: boolean;
}
const Dim = ({ isDim }: Props) => {
  return isDim ? <S.DimLayout /> : <></>;
};
export default Dim;
