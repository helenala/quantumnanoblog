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
                  description={
                    "Yello! I’m Sonakshi and I moved about 7 years ago to Europe from India for my masters in Berlin and now I am finishing up (hopefully) my phd in delft. I work on topological photonic crystals and look at all the cool topological physics happening at the nanoscale using a fancy near-field microscope. I’m a mother to my beautiful cat, Garlic and if that story isn’t  interesting enough you should talk to me about my love for very (basic) pop music, alcoholic beverages and dead baby jokes. Otherwise, I’m pretty easy going. Hope you enjoy the blog!"
                  }
                />
                <AuthorCard
                  name={"Luigi Maduro"}
                  image={LuigiProfilePicture}
                  alt={"Picture of Luigi Maduro"}
                  description={
                    "Well hello, I didn’t see you there. I’m Luigi Maduro and I joined QN as a phd candidate in the Conesa-Boj lab and am currently a postdoc in the same group. I work on the nanofabrication and theoretical calculations of two-dimensional materials. I’m originally from Aruba and moved to the Netherlands to pursue my interest in physics and to see a bit more of the world. I enjoy playing music, in whatever form I can get my hands on."
                  }
                />
                <AuthorCard
                  name={"Helena La"}
                  image={HelenaProfilePicture}
                  alt={"Picture of Helena La"}
                  description={
                    "Hello! 👋 My name is Helena La and I just finished my master’s. In January 2022, I joined the Conesa-Boj Lab as a PhD student focussing on machine learning for the theoretical modeling of STEM-EELS measurements of nanostructures. I was born and raised in West-Friesland (but I don’t have a strong accent, I think?). At any moment of the day, you will probably either find me drinking coffee, strolling around on campus or swimming in an indoor pool."
                  }
                />
                <AuthorCard
                  name={"Chunwei Li"}
                  image={ChunWeiProfilePicture}
                  alt={"Picture of Chunwei Li"}
                  description={
                    "Hi, I am Chunwei Hsu, a PhD student in the van der Zant lab. I am originally from Taiwan and moved to Canada by the age of 15. I completed my undergraduate study at McGill in Canada and moved here to Delft for my master and PhD degree. In my PhD research, I study different aspects of electronic and thermoelectric transport in mesoscopic systems, such as single molecules and 2D materials. In my free time, I enjoy cooking and traveling."
                  }
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
