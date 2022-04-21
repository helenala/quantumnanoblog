import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledH4 = styled.h4`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 700;

  font-size: 18px;
  line-height: 28px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    font-size: 24px;
    line-height: 36px;
  }
`;

interface H4Props {
  children: ReactNode;
  className?: string;
}

const H4: React.FC<H4Props> = ({ children, className }) => (
  <StyledH4 className={className}>{children}</StyledH4>
);

export default H4;
