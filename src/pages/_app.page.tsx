import { Footer, Header, HeaderMobile } from "components";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import "styles/fonts.css";
import GlobalStyle, { Main } from "styles/GlobalStyle";
import { theme } from "styles/theme";

export default function App({ Component, pageProps }: any) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicon-32x32.png"
        />
      </Head>
      <GlobalStyle />
      <Main>
        <Header />
        <HeaderMobile />
        <Component {...pageProps} />
        <Footer />
      </Main>
    </ThemeProvider>
  );
}
