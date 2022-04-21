import { NextSeo } from "next-seo";
import styled from "styled-components";
import { PaddingContainer } from "../../components/Containers";
import { H1 } from "../../components/Text";
import { getAllPosts, getPostBySlug } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import { PostType } from "../../models/Post";

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

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem 0;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }
`;

const PostTitleContainer = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-column: 1 / -1;
  }
`;

const PostContentContainer = styled.div`
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-column: 3 / span 8;
  }
`;

const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem 0;

  img {
    width: 100%;
    object-fit: cover;
  }

  p:first-of-type {
    font-weight: 700;
  }

  a {
    color: ${({ theme }) => theme.colors.primaryBase};
    text-decoration: underline;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 1rem 0;
  }
`;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

const Post = ({ post, morePosts, preview }: Props) => {
  return (
    <>
      <NextSeo />
      <PaddingContainer>
        <InnerContainer>
          <PostContainer>
            <PostTitleContainer>
              <H1>{post.title}</H1>
            </PostTitleContainer>
            <PostContentContainer>
              <PostContent dangerouslySetInnerHTML={{ __html: post.content }} />
            </PostContentContainer>
          </PostContainer>
        </InnerContainer>
      </PaddingContainer>
    </>
  );
};

export default Post;
