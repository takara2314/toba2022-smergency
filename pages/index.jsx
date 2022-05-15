import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Main from '../components/main';
import IconButton from '../components/home/iconButton';
import LabelButton from '../components/home/labelButton';
import CenterText from '../components/centerText';

const title = 'ホーム';

const Home = () => {
  const [isSmall, setIsSmall] = useState(false);

  const handleResized = () => {
    if (window.innerHeight < 700) {
      setIsSmall(true);
    } else {
      setIsSmall(false);
    }
  };

  useEffect(() => {
    handleResized();
    setTimeout(handleResized, 1000);
    window.addEventListener('resize', handleResized);
    return () => {
      window.removeEventListener('resize', handleResized);
    };
  }, [isSmall]);

  return (
    <Main title={title}>
      <section
        className="w-full h-40 bg-black"
        style={{ height: isSmall ? '6rem' : '10rem' }}
      >
        <Link href="/">
          <a>
            <CenterText>
              <div
                className="relative"
                style={{
                  width: isSmall ? '6rem' : '10rem',
                  height: isSmall ? '6rem' : '10rem'
                }}
              >
                <Image
                  src="/logo.png"
                  alt="ロゴ"
                  layout="fill"
                />
              </div>
            </CenterText>
          </a>
        </Link>
      </section>

      <section className="p-5 w-full">
        <div
          className="p-5 mb-5"
          style={{ padding: isSmall ? '0.25rem' : '1.25rem' }}
        >
          <div className="w-full h-[0.1rem] bg-gray-800 my-3" />
          <h1 className="text-red-200 italic text-xl font-bold">
            Your Safety our Priority
          </h1>
          <div className="w-full h-[0.1rem] bg-gray-800 my-3" />
        </div>

        <div className="px-3">
          <h1 className="text-xl font-medium mb-5">
            What are you up to?
          </h1>
          <ul className="flex flex-row justify-between">
            <IconButton
              icon="directions_car"
              label="Driving"
              href="/driving"
            />
            <IconButton
              icon="directions_run"
              label="Sport"
              href="/"
            />
            <IconButton
              icon="menu_book"
              label="Study"
              href="/"
            />
          </ul>
        </div>
      </section>

      <ul
        className="w-full flex flex-col fixed bottom-0"
        style={{ height: isSmall ? '12rem' : '18rem' }}
      >
        <LabelButton
          num={4}
          colorClassName="bg-neutral-500"
          label="SET UP"
          href="/"
        />
        <LabelButton
          num={4}
          colorClassName="bg-neutral-700"
          label="MEDICAL RECORD"
          href="/"
        />
        <LabelButton
          num={4}
          colorClassName="bg-red-600"
          label="SOS"
          href="/"
        />
        <LabelButton
          num={4}
          colorClassName="bg-neutral-700"
          label="SETTING"
          href="/"
        />
      </ul>
    </Main>
  );
};

export default Home;
