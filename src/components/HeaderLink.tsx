import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import styled from "styled-components";

const LinkText = styled.a`
  color: ${(props: LinkTextProps) =>
    props.isActive
      ? ({ theme }) => theme.colors.primaryBase
      : ({ theme }) => theme.colors.neutralDark};

  div {
    opacity: ${(props: LinkTextProps) => (props.isActive ? 1 : 0)};
    transition: opacity 0.2s ease-in-out;
  }

  :hover {
    color: ${({ theme }) => theme.colors.primaryBase};

    div {
      opacity: 1;
    }
  }
`;

interface HeaderLinkProps {
  href: string;
  text: string;
}

interface LinkTextProps {
  isActive: boolean;
}

const HeaderLink = ({ href, text }: HeaderLinkProps) => {
  const router = useRouter();
  const isActive = router.pathname.includes(href);

  return (
    <Link href={href} passHref>
      <LinkText isActive={isActive}>{text}</LinkText>
    </Link>
  );
};

export default React.memo(HeaderLink);
