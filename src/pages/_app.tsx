import type { AppProps } from 'next/app'
import { StateDataProvider } from '../context/useGlobalState'
import { GlobalStyle } from '../styles/globalConfig'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />

      <StateDataProvider>
        <Component {...pageProps} />
      </StateDataProvider>
    </>
  )
}
export default MyApp
