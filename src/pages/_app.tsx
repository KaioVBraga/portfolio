import GlobalStyle from "../styles/global";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Kaio Braga</title>
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}
export default MyApp;
