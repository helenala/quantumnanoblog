import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledH3 = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 700;

  font-size: 24px;
  line-height: 32px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    font-size: 32px;
    line-height: 48px;
  }
`;

interface H3Props {
  children: ReactNode;
  className?: string;
}

const H3: React.FC<H3Props> = ({ children, className }) => (
  <StyledH3 className={className}>{children}</StyledH3>
);

export default H3;
