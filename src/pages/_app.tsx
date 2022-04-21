import type { AppProps } from "next/app";
import { Reset } from "styled-reset";
import { createGlobalStyle, css, ThemeProvider } from "styled-components";

import Layout from "../components/Layout";

import Theme from "../themes/QuantumNanoScienceTheme";
import { DefaultSeo } from "next-seo";

const GlobalStyle = createGlobalStyle`${css`
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.primaryBase};
    font-display: swap;
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
  }

  #__next {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  body {
    font-size: 18px;
    line-height: 28px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  .ReactModal__Body--open {
    overflow: hidden;
  }

  .ReactModal__Overlay {
    opacity: 0;
  }

  .ReactModal__Overlay--after-open {
    opacity: 1;
  }

  .ReactModal__Overlay--before-close {
    opacity: 0;
  }
`}`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Reset />
        <GlobalStyle />
        <Layout>
          <DefaultSeo titleTemplate="%s | Quantum Nano Science" />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
