import Link from 'next/link';
import Main from '../components/main';

const title = 'ใในใ';

const Test = () => {
  return (
    <Main title={title}>
      Hello
      <Link href="/">
        Test
      </Link>
    </Main>
  );
};

export default Test;
