import Head from 'next/head';
import { useEffect, useRef } from 'react';
import { RecoilRoot } from 'recoil';
import { AnimatePresence } from 'framer-motion';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  const rootObj = useRef(null);

  useEffect(() => {
    if (rootObj.current === null) {
      return;
    }
    rootObj.current.style.width = window.innerWidth;
    rootObj.current.style.height = window.innerHeight;
  }, [rootObj.current]);

  return (
    <RecoilRoot>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="robots" content="noindex" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ja_JP" />
      </Head>

      <div
        className="flex fixed overflow-hidden"
        ref={rootObj}
      >
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} />
        </AnimatePresence>
      </div>
    </RecoilRoot>
  );
};

export default MyApp;
