import React from "react";
import styled from "styled-components";

import MenuIcon from "../assets/menu.svg";
import CloseIcon from "../assets/close.svg";

const MobileMenuIconContainer = styled.div`
  display: grid;
  gap: 6px;
  cursor: pointer;
  align-items: center;
  z-index: 1000;
`;

const CloseIconStyled = styled(CloseIcon)`
  stroke: ${({ theme }) => theme.colors.neutralDark};
`;

interface MobileMenuIconProps {
  className?: string;
  isOpen: boolean;
  onClick: () => void;
}

const MobileMenuIcon = ({
  className,
  isOpen,
  onClick,
}: MobileMenuIconProps) => (
  <MobileMenuIconContainer className={className} onClick={onClick}>
    {isOpen ? <CloseIconStyled /> : <MenuIcon />}
  </MobileMenuIconContainer>
);

export default MobileMenuIcon;
