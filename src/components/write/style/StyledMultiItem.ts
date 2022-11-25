import styled from "styled-components";

const MultiItemLayout = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const MultiItemGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  div + div {
    margin-left: 5px;
  }
`;
const MultiItemPage = styled.div`
  font-size: 14px;
`;

export { MultiItemLayout, MultiItemGroup, MultiItemPage };
