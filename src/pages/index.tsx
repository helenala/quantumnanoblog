import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import { PaddingContainer } from "../components/Containers";
import { H1, H2, H4 } from "../components/Text";
import { getAllPosts } from "../lib/api";
import { PostType } from "../models/Post";

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

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem 0;
`;

const HomePageTitle = styled(H1)``;

const LatestBlogsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem 0;
`;

const LatestBlogsItemsContainer = styled.div`
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

const BlogItemContainer = styled.a`
  display: flex;
  flex-direction: column;
  gap: 0.5rem 0;
`;

const LatestBlogsTitle = styled(H2)``;

const LatestBlogsItemTitle = styled(H4)``;

const LatestBlogsItemsImageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  aspect-ratio: 1;
  background: ${({ theme }) => theme.colors.primaryBase};
`;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};

type Props = {
  allPosts: PostType[];
};

const HomePage = ({ allPosts }: Props) => {
  console.log(allPosts);

  return (
    <>
      <NextSeo title="Home" />
      <PaddingContainer>
        <InnerContainer>
          <HomeContainer>
            <HomePageTitle>Welcome to our Blog!</HomePageTitle>
            <LatestBlogsContainer>
              <LatestBlogsTitle>Latest blogs</LatestBlogsTitle>
              <LatestBlogsItemsContainer>
                {allPosts.map((post) => (
                  <Link
                    as={`/posts/${post.slug}`}
                    href={"/posts/[slug]"}
                    key={post.slug}
                    passHref
                  >
                    <BlogItemContainer>
                      <LatestBlogsItemsImageContainer>
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          layout="fill"
                          objectFit="cover"
                        />
                      </LatestBlogsItemsImageContainer>
                      <LatestBlogsItemTitle>{post.title}</LatestBlogsItemTitle>
                    </BlogItemContainer>
                  </Link>
                ))}
              </LatestBlogsItemsContainer>
            </LatestBlogsContainer>
          </HomeContainer>
        </InnerContainer>
      </PaddingContainer>
    </>
  );
};

export default HomePage;
