import { memo } from "react";
import * as S from "./style/StyledFooter";

const Footer = () => {
  return (
    <S.FooterLayout>
      <S.FooterContainer>
        <S.FooterWrapper>
          Copyrightⓒ2022&nbsp;
          <strong
            style={{ cursor: "pointer" }}
            onClick={() =>
              (window.location.href = "https://github.com/ryuhojin")
            }
          >
            RYU
          </strong>
          &nbsp;&&nbsp;
          <strong
            style={{ cursor: "pointer" }}
            onClick={() =>
              (window.location.href = "https://github.com/choisungyoung")
            }
          >
            CHOI
          </strong>
          &nbsp;All rights reserved.
        </S.FooterWrapper>
      </S.FooterContainer>
    </S.FooterLayout>
  );
};
export default memo(Footer);
