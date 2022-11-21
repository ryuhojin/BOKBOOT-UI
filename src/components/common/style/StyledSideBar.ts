import styled from "styled-components";

const SideBarLayout = styled.div`
  div {
    position: absolute;
    right:0;
    height: 100%;
    width: 0;
    transition: 0.5s ease-in-out;
    z-index: 5;
  }
  & .open {
    width: 240px;
  }
`;

const SideBarContainer = styled.div`
  background: ${(props) => props.theme.colors.pointColor};
`;
export { SideBarLayout, SideBarContainer };
