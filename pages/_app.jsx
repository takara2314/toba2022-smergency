import Head from 'next/head';
import { useEffect } from 'react';
import { RecoilRoot } from 'recoil';
import { AnimatePresence } from 'framer-motion';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  const handleResized = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  useEffect(() => {
    handleResized();
    setTimeout(handleResized, 1000);
    window.addEventListener('resize', handleResized);
    return () => {
      window.removeEventListener('resize', handleResized);
    };
  }, []);

  return (
    <RecoilRoot>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="robots" content="noindex" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ja_JP" />
      </Head>

      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>
    </RecoilRoot>
  );
};

export default MyApp;
