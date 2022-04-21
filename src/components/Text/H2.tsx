import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledH2 = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 700;

  font-size: 34px;
  line-height: 48px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    font-size: 48px;
    line-height: 96px;
  }
`;

interface H2Props {
  children: ReactNode;
  className?: string;
}

const H2: React.FC<H2Props> = ({ children, className }) => (
  <StyledH2 className={className}>{children}</StyledH2>
);

export default H2;
