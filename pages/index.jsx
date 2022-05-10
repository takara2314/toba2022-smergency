import Link from 'next/link';
import Image from 'next/image';
import Main from '../components/main';
import IconButton from '../components/home/iconButton';
import LabelButton from '../components/home/labelButton';
import CenterText from '../components/centerText';

const title = 'ホーム';

const Home = () => {
  return (
    <Main title={title}>
      <section className="w-full h-40 bg-black">
        <Link href="/">
          <a>
            <CenterText>
              <div className="w-40 h-40 relative">
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
        <div className="p-5 mb-5">
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

      <ul className="w-full h-72 flex flex-col absolute bottom-0">
        <LabelButton
          num={4}
          colorClassName="bg-gray-500"
          label="SET UP"
          href="/"
        />
        <LabelButton
          num={4}
          colorClassName="bg-gray-800"
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
          colorClassName="bg-gray-800"
          label="SETTING"
          href="/"
        />
      </ul>
    </Main>
  );
};

export default Home;
