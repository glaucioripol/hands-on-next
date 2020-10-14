import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { Reset, theme } from '../src/styles'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
    <Reset />
  </ThemeProvider>
)

export default MyApp
