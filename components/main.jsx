import Head from 'next/head';
import { motion } from 'framer-motion';

const Main = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title} - Smergency</title>
      </Head>

      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={{
          hidden: { opacity: 0, x: -200, y: 0 },
          enter: { opacity: 1, x: 0, y: 0 },
          exit: { opacity: 0, x: 0, y: -100 },
        }}
        transition={{ type: 'linear' }}
        className="w-full flex flex-col items-center"
      >
        {children}
      </motion.main>
    </>
  );
};

export default Main;
