import styled from "styled-components";

const CtnGroupLayout = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 8px;
  bottom: 8px;

  transition: 0.5s ease-in-out;
  div + div {
    margin-top: 8px;
  }
`;

export { CtnGroupLayout };
