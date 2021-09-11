import "../components/globals.css";
import Head from "next/head";

function Website({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='icon' href='favicon.svg' />
        <link rel='mask-icon' href='mask-icon.svg' color='var(--black)' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default Website;
