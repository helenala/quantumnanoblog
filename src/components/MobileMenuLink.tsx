import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import styled from "styled-components";
import { H4 } from "./Text";

const LinkText = styled.a`
  width: 100%;
  text-align: end;
  color: ${(props: LinkTextProps) =>
    props.isActive
      ? ({ theme }) => theme.colors.primaryBase
      : ({ theme }) => theme.colors.neutralDark};

  div {
    opacity: ${(props: LinkTextProps) => (props.isActive ? 1 : 0)};
    transition: opacity 0.2s ease-in-out;
  }

  :hover {
    color: ${({ theme }) => theme.colors.neutralDark};

    div {
      opacity: 1;
    }
  }
`;

interface HeaderLinkProps {
  href: string;
  text: string;
  onClick?: (e: any) => any;
}

interface LinkTextProps {
  isActive: boolean;
}

const MobileMenuLink = ({ href, text, onClick }: HeaderLinkProps) => {
  const router = useRouter();
  const isActive = router.pathname.includes(href);

  return (
    <Link href={href} passHref>
      <LinkText isActive={isActive} onClick={onClick}>
        <H4>{text}</H4>
      </LinkText>
    </Link>
  );
};

export default React.memo(MobileMenuLink);
