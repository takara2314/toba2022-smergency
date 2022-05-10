import Link from 'next/link';
import Main from '../components/main';

const title = 'ホーム';

const Home = () => {
  return (
    <Main title={title}>
      Hello
      <Link href="/test">
        Takara
      </Link>
    </Main>
  );
};

export default Home;
