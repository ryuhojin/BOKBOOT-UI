import styled from "styled-components";

const HaaderLayout = styled.header`
  width: 100%;
  height: 60px;
`;
const HeaderContainer = styled.div`
  max-width: 1140px;
  width: 100%;
  height: 100%;
  margin: auto;
`;
const HeaderWrapper = styled.div`
  padding: 0 24px;
  margin: 0 auto;
  height: 100%;
  justify-content: space-between;
  display: flex;
`;

const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeaderRight = styled.div`
  display: flex;
  div:first-child {
    margin-right: 15px;
    font-size: 20px;
    color: ${(props) => props.theme.colors.toggleColor};
  }
`;

const HeaderTitle = styled.span`
  font-size: 14px;
  font-weight: bold;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.titleColor};
  }
`;

const HeaderDescription = styled.span`
  font-size: 10px;
`;

const HeaderDescriptionMode = styled.span`
color: ${(props) => props.theme.colors.titleColor};
`

const HeaderDarkModeWrapper = styled.div`
  align-self: center;
  width: 60px;
  border-radius: 25px;
  border: black;
  height: 30px;
  position: relative;

  input[type="checkbox"] {
    display: none;
  }

  input[type="checkbox"] + label {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 25px;
    background: ${(props) => props.theme.colors.toggleColor};
  }

  input[type="checkbox"] + label::after {
    content: "🌕";
  }

  input[type="checkbox"]:checked + label::after {
    content: "☀️";
  }
`;

export {
  HaaderLayout,
  HeaderContainer,
  HeaderLeft,
  HeaderRight,
  HeaderDarkModeWrapper,
  HeaderWrapper,
  HeaderTitle,
  HeaderDescription,
  HeaderDescriptionMode
};
