import React from "react";
import ReactModal from "react-modal";
import styled from "styled-components";
import { RemoveScroll } from "react-remove-scroll";

import Theme from "../themes/QuantumNanoScienceTheme";
import MobileMenuLink from "./MobileMenuLink";

const RemoveScrollContainer = styled(RemoveScroll)`
  height: 100%;
`;

const Container = styled.div`
  height: 100%;
  display: grid;
  align-content: center;
  text-align: center;
  gap: 2rem 0;
`;

interface MobileMenuProps {
  isOpen: boolean;
  toggleMobileMenu: () => void;
}

const MobileMenu = ({ isOpen, toggleMobileMenu }: MobileMenuProps) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={toggleMobileMenu}
      contentLabel="Mobile Menu"
      style={{
        content: {
          inset: 0,
          border: "none",
          borderRadius: 0,
          backgroundColor: Theme.colors.background,
          color: Theme.colors.primaryBase,
          padding: "1rem",
        },
        overlay: {
          zIndex: 2,
        },
      }}
    >
      <RemoveScrollContainer>
        <Container>
          <MobileMenuLink
            href={"/about"}
            text={"About"}
            onClick={toggleMobileMenu}
          />
          <MobileMenuLink
            href={"/contact"}
            text={"Contact"}
            onClick={toggleMobileMenu}
          />
        </Container>
      </RemoveScrollContainer>
    </ReactModal>
  );
};

export default MobileMenu;
