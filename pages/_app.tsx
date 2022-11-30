import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import ym from 'react-yandex-metrika';
import {YMInitializer} from 'react-yandex-metrika';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  router.events.on('routeChangeComplete', (url: string) => {
    if (typeof window !== 'undefined') {
      ym('hit', url);
    }
  })
  return (
    <>
      <Head>
        <title>OwlTop - лучший агрегатор курсов</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://mc.yandex.ru" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/x-icon" href="https://img.icons8.com/cotton/512/owl.png"/>
        <meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath}/>
        <meta property="og:locale" content="ru_RU"/>
      </Head>
      <YMInitializer accounts={[]} options={{webvisor: true, defer: true}} version={"2"}/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
