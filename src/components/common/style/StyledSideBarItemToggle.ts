import styled from "styled-components";

const SideBarItemToggleLayout = styled.label`
  width: 90px;
  height: 22px;
  position: relative;
  display: inline-block;
  input:checked + .slider {
  }
  input:checked + .slider:before {
    transform: translateX(50px);
  }
`;
const SideBarItemToggleCheckBox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const SideBarItemToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  transition: 0.4s;
  left: 0;
  ::before {
    position: absolute;
    content: "";
    height: 22px;
    width: 40px;
    border-radius: 5px;
    background: ${(props) => props.theme.colors.basicColor};
    transition: 0.4s;
  }
`;

export {
  SideBarItemToggleLayout,
  SideBarItemToggleCheckBox,
  SideBarItemToggleSlider,
};
