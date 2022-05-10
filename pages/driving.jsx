import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import Main from '../components/main';
import IconButton from '../components/home/iconButton';
import LabelButton from '../components/home/labelButton';
import CenterText from '../components/centerText';
import CircleIcon from '../components/circleIcon';
import PrimaryButton from '../components/primaryButton';
import CancelButton from '../components/cancelButton';
import Icon from '../components/icon';
import IconLabelButton from '../components/iconLabelButton';
import SosButton from '../components/sosButton';

const title = 'ドライブ';

const Driving = () => {
  const router = useRouter();

  const [isStarted, setIsStarted] = useState(false);

  const startHandler = useCallback(() => {
    setIsStarted(true);
  }, []);

  const cancelHandler = useCallback(() => {
    router.push('/');
  }, []);

  return (
    <Main title={title}>
      <section
        className="w-full transition-all"
        style={{ height: !isStarted ? '40vh' : '20vh' }}
      >
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

      <section
        className="p-5 w-full bg-neutral-800 rounded-t-2xl flex flex-col items-center justify-around transition-all"
        style={{ height: !isStarted ? '60vh' : '80vh' }}
      >
        <CircleIcon icon="directions_car" />
        {!isStarted
          ? (
            <>
              <div className="text-xl">
                {'Have a safe journey, don\'t forget your seatbelt!'}
              </div>
              <div className="w-full h-52 flex flex-col justify-between">
                <PrimaryButton
                  label="START DRIVING"
                  onClick={startHandler}
                />
                <CancelButton
                  onClick={cancelHandler}
                />
              </div>
            </>
          )
          : (
            <>
              <div className="w-full flex flex-row justify-around">
                <div className="text-5xl text-red-500">
                  <CenterText>
                    <Icon>
                      warning
                    </Icon>
                  </CenterText>
                </div>
                <div className="w-3/4 text-xl text-left">
                  {'Now, we are put on alert to see any possibilities that might happen to you'}
                </div>
              </div>
              <div className="w-full h-[20rem] flex flex-col justify-between">
                <ul className="flex flex-row flex-wrap items-end content-start justify-between">
                  <IconLabelButton
                    num={2.15}
                    icon="car_crash"
                    label="Car crash"
                    onClick={startHandler}
                  />
                  <IconLabelButton
                    num={2.15}
                    icon="local_fire_department"
                    label="Car on fire"
                    onClick={startHandler}
                  />
                  <IconLabelButton
                    num={2.15}
                    icon="car_crash"
                    label="Hard impact"
                    onClick={startHandler}
                  />
                  <SosButton
                    num={2.15}
                    onClick={startHandler}
                  />
                </ul>
                <CancelButton
                  onClick={cancelHandler}
                />
              </div>
            </>
          )
        }
      </section>
    </Main>
  );
};

export default Driving;
