import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 1rem;
  margin: 0;
  display: grid;
  gap: 2rem 0;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 2rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    gap: 4rem 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktopL}) {
    padding: 0 4rem;
    width: ${({ theme }) => theme.breakpoints.desktopL};
  }

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints.desktopL} + ${({ theme }) => theme.margins.large})) {
    padding: 0;
  }
`;

interface PaddingContainerProps {
  className?: string;
  children?: React.ReactNode;
}

const PaddingContainer = ({ className, children }: PaddingContainerProps) => (
  <Container className={className}>{children}</Container>
);

export default PaddingContainer;
