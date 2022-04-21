import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 700;

  font-size: 48px;
  line-height: 64px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    font-size: 72px;
    line-height: 130px;
  }
`;

interface H1Props {
  children: ReactNode;
  className?: string;
}

const H1: React.FC<H1Props> = ({ children, className }) => (
  <StyledH1 className={className}>{children}</StyledH1>
);

export default H1;
