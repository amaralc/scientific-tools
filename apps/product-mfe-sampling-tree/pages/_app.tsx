import { AppProps } from 'next/app';
import Head from 'next/head';
import 'reactflow/dist/style.css';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to product-mfe-sampling-tree!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
