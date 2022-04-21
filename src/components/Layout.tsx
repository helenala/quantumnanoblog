import styled from "styled-components";

import Footer from "./Footer";
import Header from "./Header";

const Main = styled.main`
  flex: 1 0 auto;
`;

interface LayoutProps {
  children?: React.ReactNode;
}

const MaxWidthContainer = styled.div`
  flex: 1 0 auto; // Makes the footer sticky to the bottom

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktopL}) {
    width: ${({ theme }) => theme.breakpoints.desktopL};
    margin: 0 auto;
  }
`;

const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <MaxWidthContainer>
      <Main role="main">{children}</Main>
    </MaxWidthContainer>
    <Footer />
  </>
);

export default Layout;
