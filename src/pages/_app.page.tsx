import { Footer, Header, HeaderMobile } from 'components'
import { ThemeProvider } from 'styled-components'
import GlobalStyle, { Main } from 'styles/GlobalStyle'
import { theme } from '../styles/theme'

export default function App({ Component, pageProps }: any) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main>
        <Header />
        <HeaderMobile />
        <Component {...pageProps} />
        <Footer />
      </Main>
    </ThemeProvider>
  )
}
