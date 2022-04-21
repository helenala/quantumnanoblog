import Link from "next/link";
import React from "react";

import styled from "styled-components";

const FooterContainer = styled.footer`
  display: grid;
  grid-template-columns: 1fr;
  background-color: ${({ theme }) => theme.colors.background};
  text-align: center;
  flex-shrink: 0;
  padding: 2rem 1rem;
  font-size: 14px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 2rem;
    line-height: 24px;
    grid-template-columns: repeat(12, 1fr);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktopL}) {
    width: ${({ theme }) => theme.breakpoints.desktopL};
    padding: 1.5rem ${({ theme }) => theme.margins.large};
    margin: 0 auto;
  }

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints.desktop} + ${({ theme }) =>
      theme.breakpoints.desktopL})) {
    padding: 2rem 0;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: left;
  font-style: normal;
  font-weight: normal;

  hr {
    margin: 2rem 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-column: 2 / 12;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktopL}) {
    grid-column: 3 / span 8;
  }

  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints.desktopL} + ${({ theme }) => theme.margins.large})) {
    padding: 2rem 0;
    width: ${({ theme }) => theme.breakpoints.desktop};
    margin: 0 auto;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem 0;
`;

const SectionsContainer = styled.div`
  display: grid;
  gap: 1.5rem 0;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    gap: 0 8rem;
  }
`;

const LinksContainer = styled.div`
  display: grid;
`;

const CertifiedText = styled.p`
  font-weight: bold;
`;

const SectionContainer = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 1.5rem 0;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 1rem 0;
    word-wrap: break-word;
  }
`;

interface SectionProps {
  children?: React.ReactNode;
}

const Section = ({ children }: SectionProps) => (
  <SectionContainer>{children}</SectionContainer>
);

interface SectionProps {
  title: string | JSX.Element;
}

const Footer = () => {
  return (
    <FooterContainer>
      <InnerContainer>
        <LeftContainer>
          <SectionsContainer>
            <Section title={""}>
              <LinksContainer>
                <Link href={"/about"}>
                  <a>About</a>
                </Link>
              </LinksContainer>
              <LinksContainer>
                <Link href={"/contact"} passHref>
                  <a>Contact</a>
                </Link>
              </LinksContainer>
            </Section>
          </SectionsContainer>
          <CertifiedText>
            © {new Date().getFullYear()} Quantum Nanoscience
          </CertifiedText>
        </LeftContainer>
      </InnerContainer>
    </FooterContainer>
  );
};

export default React.memo(Footer);
