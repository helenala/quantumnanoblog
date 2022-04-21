import React from "react";
import { useMedia, useToggle } from "react-use";
import Link from "next/link";

import styled from "styled-components";
import Theme from "../themes/QuantumNanoScienceTheme";
import MobileMenuIcon from "./MobileMenuIcon";
import MobileMenu from "./MobileMenu";

import HeaderLink from "./HeaderLink";

const HeaderContainer = styled.header`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.neutralDark};
  font-size: 1rem;

  hr {
    border: 1px solid ${({ theme }) => theme.colors.neutralDark};
    background-color: ${({ theme }) => theme.colors.neutralDark};
    margin: 0;
    height: 100%;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  z-index: 1;
  cursor: pointer;
`;

const InnerContainer = styled.div`
  padding: 1.5rem ${({ theme }) => theme.margins.small};
  display: flex;
  justify-content: space-between;
  height: 5rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 1.5rem ${({ theme }) => theme.margins.medium};
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

const HomeLinkText = styled.a`
  color: ${({ theme }) => theme.colors.primaryBase};
`;

const RightAlignedContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 0 1rem;
  font-weight: normal;
  font-size: 14px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 0 4rem;
    font-weight: bold;
    z-index: 3;
  }
`;

const Header = () => {
  const [isMobileMenuOpen, toggleMobileMenu] = useToggle(false);
  const isLaptopOrBigger = useMedia(`(min-width: ${Theme.breakpoints.laptop})`);

  return (
    <>
      <HeaderContainer>
        <InnerContainer>
          <LogoContainer>
            <Link href="/" passHref>
              <HomeLinkText>Quantum Nanoscience</HomeLinkText>
            </Link>
          </LogoContainer>
          <RightAlignedContainer>
            {isLaptopOrBigger ? (
              <>
                <HeaderLink href={"/about"} text={"About Us"} />
                <HeaderLink href={"/contact"} text={"Contact"} />
              </>
            ) : (
              <>
                <MobileMenuIcon
                  isOpen={isMobileMenuOpen}
                  onClick={toggleMobileMenu}
                />
              </>
            )}
          </RightAlignedContainer>
        </InnerContainer>
      </HeaderContainer>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />
    </>
  );
};

export default React.memo(Header);
