import Image, { StaticImageData } from "next/image";
import styled from "styled-components";

import SonakshiProfilePicture from "/src/assets/sonakshi.jpg.webp";
import { H2, H4 } from "../Text";
import AuthorModal from "./AuthorModal";
import { useToggle } from "react-use";

const AuthorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem 0;
`;

const AuthorTitle = styled(H4)``;

const AuthorImageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  aspect-ratio: 1;
  background: ${({ theme }) => theme.colors.primaryBase};
`;

interface AuthorCardProps {
  name: string;
  image: StaticImageData;
  alt: string;
  description: string;
}

const AuthorCard = ({ name, image, alt, description }: AuthorCardProps) => {
  const [isAuthorModalOpen, toggleAuthorModal] = useToggle(false);
  return (
    <>
      <AuthorContainer onClick={toggleAuthorModal}>
        <AuthorImageContainer>
          <Image src={image} layout="fill" objectFit="cover" alt={alt} />
        </AuthorImageContainer>
        <AuthorTitle>{name}</AuthorTitle>
      </AuthorContainer>

      <AuthorModal
        isOpen={isAuthorModalOpen}
        title={name}
        text={description}
        toggleAuthorModal={toggleAuthorModal}
        onCancel={toggleAuthorModal}
      />
    </>
  );
};

export default AuthorCard;
