import { NextPage } from "next";
import { NextSeo } from "next-seo";
import styled from "styled-components";

import SonakshiProfilePicture from "/src/assets/sonakshi.jpg.webp";
import LuigiProfilePicture from "/src/assets/luigi.jpeg.webp";
import HelenaProfilePicture from "/src/assets/helena.jpg";
import ChunWeiProfilePicture from "/src/assets/chunwei.jpeg";

import { PaddingContainer } from "../components/Containers";
import { H1, H2 } from "../components/Text";
import AuthorCard from "../components/About/AuthorCard";

const InnerContainer = styled.div`
  display: grid;
  gap: 4rem;
  margin-top: 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    gap: 6rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: 8rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktopL}) {
    gap: 16rem;
  }
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem 0;
`;

const EditorialTeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem 0;
`;

const EditorialTeamAuthorsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const EditorialTeamTitle = styled(H2)``;

const AboutPage: NextPage = () => {
  return (
    <>
      <NextSeo />
      <PaddingContainer>
        <InnerContainer>
          <AboutContainer>
            <H1>About us</H1>
            <p>The editorial team welcomes you to the official blog of QN!</p>
            <p>
              The department of Quantum Nanoscience is made of people who spend
              an incredible amount of time studying quantum phenomena in a wide
              variety of nanometer-scale devices and materials, exploring new
              physics and novel applications of quantum effects.
            </p>
            <p>
              These individuals from different parts of QN, who work together in
              different fields of physics have varied interests inside and
              outside the department and would like to share their life with
              you.
            </p>
            <p>
              To this end, we started a blog of the people and we are very
              excited to introduce to you this endeavor. Thank you for being
              here and we hope you enjoy reading the articles!
            </p>
            <p>Regards,</p>
            <p>
              The editorial team, <br />
              Helena, Chunwei, Luigi and Sonakshi
            </p>
            <EditorialTeamContainer>
              <EditorialTeamTitle>Team</EditorialTeamTitle>
              <EditorialTeamAuthorsContainer>
                <AuthorCard
                  name={"Sonakshi Arora"}
                  image={SonakshiProfilePicture}
                  alt={"Picture of Sonakshi Arora"}
                  description={"This is Sonakshi Arora"}
                />
                <AuthorCard
                  name={"Luigi Maduro"}
                  image={LuigiProfilePicture}
                  alt={"Picture of Luigi Maduro"}
                  description={"This is Luigi Maduro"}
                />
                <AuthorCard
                  name={"Helena La"}
                  image={HelenaProfilePicture}
                  alt={"Picture of Helena La"}
                  description={"This is Helena La"}
                />
                <AuthorCard
                  name={"Chunwei Li"}
                  image={ChunWeiProfilePicture}
                  alt={"Picture of Chunwei Li"}
                  description={"This is Chunwei Li"}
                />
              </EditorialTeamAuthorsContainer>
            </EditorialTeamContainer>
          </AboutContainer>
        </InnerContainer>
      </PaddingContainer>
    </>
  );
};

export default AboutPage;
