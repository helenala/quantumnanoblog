import React from "react";
import Link from "next/link";
import ReactModal from "react-modal";
import ReactMarkdown from "react-markdown";
import { useMedia } from "react-use";
import { RemoveScroll } from "react-remove-scroll";

import styled from "styled-components";
import { H4 } from "../Text";
import QuantumNanoScienceTheme from "../../themes/QuantumNanoScienceTheme";
import CloseIcon from "../../assets/close.svg";

const RemoveScrollContainer = styled(RemoveScroll)`
  height: 100%;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  height: 100%;
`;

const AuthorModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
  height: 100%;
`;

const AuthorModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AuthorModalTitle = styled(H4)`
  font-weight: bold;
`;

const AuthorModalButton = styled.div`
  display: flex;
  cursor: pointer;
`;

const AuthorModalDescription = styled(ReactMarkdown)`
  display: flex;
  flex-direction: column;
  gap: 1rem 0;
  font: inherit;
  overflow: scroll;
  padding-right: 1rem;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;

const AuthorModalWorkedOnTitle = styled.p`
  font: inherit;
  font-weight: bold;
`;

const AuthorModalWorkedOnContainer = styled.a`
  text-decoration: underline;
`;

const AuthorModalFooter = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledCloseIcon = styled(CloseIcon)`
  stroke: ${({ theme }) => theme.colors.neutralDark1};
`;

interface AuthorModalProps {
  isOpen: boolean;
  title: string;
  text: string;
  toggleAuthorModal: () => void;
  onCancel(): void;
}

const AuthorModal = ({
  isOpen,
  toggleAuthorModal,
  title,
  text,
  onCancel,
}: AuthorModalProps) => {
  const isLaptopOrBigger = useMedia(
    `(min-width: ${QuantumNanoScienceTheme.breakpoints.laptop})`
  );
  return (
    <ReactModal
      isOpen={isOpen}
      closeTimeoutMS={200}
      contentLabel={`Character Modal ${title}`}
      onRequestClose={onCancel}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.25)",
          transition: "opacity 200ms ease-in-out",
          zIndex: 101,
        },
        content: {
          inset: 0,
          padding: 0,
          borderRadius: "0.5rem",
          color: QuantumNanoScienceTheme.colors.neutralDark,
          backgroundColor: QuantumNanoScienceTheme.colors.neutralLight,
          width: isLaptopOrBigger ? "46rem" : "20rem",
          height: isLaptopOrBigger ? "28rem" : "24rem",
          margin: "auto",
          position: "fixed",
          overflow: "hidden",
          zIndex: 100,
        },
      }}
    >
      <RemoveScrollContainer>
        <Container>
          <AuthorModalContainer>
            <AuthorModalHeader>
              <AuthorModalTitle>{title}</AuthorModalTitle>
              <AuthorModalButton onClick={toggleAuthorModal}>
                <StyledCloseIcon />
              </AuthorModalButton>
            </AuthorModalHeader>
            <AuthorModalDescription>{text}</AuthorModalDescription>
          </AuthorModalContainer>
        </Container>
      </RemoveScrollContainer>
    </ReactModal>
  );
};

export default AuthorModal;
