import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import Main from '../components/main';
import CenterText from '../components/centerText';
import CircleIcon from '../components/circleIcon';
import PrimaryButton from '../components/primaryButton';
import CancelButton from '../components/cancelButton';
import Icon from '../components/icon';
import IconLabelButton from '../components/iconLabelButton';
import SosButton from '../components/sosButton';
import CheckButton from '../components/checkButton';
import vh from '../utils/vh';

const title = 'ドライブ';

const Driving = () => {
  const router = useRouter();

  const [isStarted, setIsStarted] = useState(false);
  const [isImpacted, setIsImpacted] = useState(false);
  const [message, setMessage] = useState('');

  const [debugX, setDebugX] = useState(-1);
  const [debugY, setDebugY] = useState(-1);
  const [debugZ, setDebugZ] = useState(-1);

  const [isSmall, setIsSmall] = useState(false);

  let beforeX = -1;
  let beforeY = -1;
  let beforeZ = -1;

  const startHandler = useCallback(() => {
    setIsStarted(true);
  }, []);

  const cancelHandler = useCallback(() => {
    router.push('/');
  }, []);

  const impactHandler = useCallback(() => {
    setIsImpacted(true);
  }, []);

  const okHandler = useCallback(() => {
    setIsImpacted(false);
  }, []);

  const messageHandler = useCallback(() => {

  }, []);

  const callHandler = useCallback(() => {
    setMessage('Called');
    setTimeout(() => {
      setIsImpacted(false);
      setMessage('');
    }, 5000);
  }, []);

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

  useEffect(() => {
    if (!isStarted) {
      return;
    }

    // 参考: https://qiita.com/okumura_daiki/items/16a09c9c0d0b2509d261
    if (
      DeviceMotionEvent &&
      typeof DeviceMotionEvent.requestPermission === 'function'
    ) {
      // iOS 13+ の Safari
      // 許可を取得
      DeviceMotionEvent.requestPermission()
        .then(permissionState => {
          if (permissionState === 'granted') {
            // 許可を得られた場合、devicemotionをイベントリスナーに追加
            window.addEventListener('devicemotion', handleMotionEvent);
          } else {
            router.push('/');
          }
        })
        .catch(console.error);
    } else {
      window.addEventListener('devicemotion', handleMotionEvent);
    }

    return () => {
      window.removeEventListener('devicemotion', handleMotionEvent);
    };
  }, [isStarted]);

  useEffect(() => {
    if (!isImpacted) {
      return;
    }
    window.navigator.vibrate(500);
  }, [isImpacted]);

  const handleMotionEvent = (e) => {
    const x = e.accelerationIncludingGravity.x;
    const y = e.accelerationIncludingGravity.y;
    const z = e.accelerationIncludingGravity.z;
    setDebugX(Math.round(x * 1000) / 1000);
    setDebugY(Math.round(y * 1000) / 1000);
    setDebugZ(Math.round(z * 1000) / 1000);

    if (beforeX != -1 && beforeY != -1 && beforeZ != -1) {
      if (Math.abs(x - beforeX) >= 10 && Math.abs(y - beforeY) >= 10 && Math.abs(z - beforeZ) >= 10) {
        setIsImpacted(true);
      }
    }

    beforeX = x;
    beforeY = y;
    beforeZ = z;
  };

  return (
    <Main title={title}>
      <section
        className="w-full transition-all"
        style={{
          height: !isStarted ? vh(40) : vh(20),
          backgroundColor: !isImpacted ? 'transparent' : 'rgb(64, 64, 64)'
        }}
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
        style={{
          height: !isStarted ? vh(60) : vh(80),
          backgroundColor: !isImpacted ? 'rgb(38, 38, 38)' : 'rgb(64, 64, 64)',
          borderTopLeftRadius: !isImpacted ? '1rem' : '0',
          borderTopRightRadius: !isImpacted ? '1rem' : '0',
        }}
      >
        {!isStarted ? (
          <>
            <CircleIcon icon="directions_car" />
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
        ) : (
          <>
            {!isImpacted ? (
              <>
                <CircleIcon icon="directions_car" />
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
                      onClick={impactHandler}
                    />
                    <SosButton
                      num={2.15}
                      onClick={startHandler}
                    />
                  </ul>
                  <CancelButton
                    onClick={cancelHandler}
                  />
                  {/* <ul className="w-full text-left flex flex-row">
                    <li className="w-1/3">X: {debugX}</li>
                    <li className="w-1/3">Y: {debugY}</li>
                    <li className="w-1/3">Z: {debugZ}</li>
                  </ul> */}
                </div>
              </>
            ) : (
              <>
                <div
                  className="text-gray-900 bg-neutral-400 rounded-2xl px-10"
                  style={{ fontSize: isSmall ? '4rem' : '8rem' }}
                >
                  <Icon>
                    car_crash
                  </Icon>
                </div>
                <div
                  className="w-full bg-neutral-300 rounded-2xl px-2 flex flex-row justify-around"
                  style={{
                    paddingTop: isSmall ? '0.5rem' : '1rem',
                    paddingBottom: isSmall ? '0.5rem' : '1rem'
                  }}
                >
                  <div className="text-5xl text-red-500">
                    <CenterText>
                      <Icon>
                        warning
                      </Icon>
                    </CenterText>
                  </div>
                  <div className="w-3/4 text-red-500 text-xl text-left">
                    <CenterText>
                      {'Hard impact detected'}
                    </CenterText>
                  </div>
                </div>
                {message === '' ? (
                  <div
                    className="w-full flex flex-col justify-between"
                    style={{ height: isSmall ? '11rem' : '14rem' }}
                  >
                    <CheckButton
                      okHandler={okHandler}
                      messageHandler={messageHandler}
                      callHandler={callHandler}
                      isSmall={isSmall}
                    />
                  </div>
                ) : (
                  <div className="text-3xl h-56">
                    {message}
                  </div>
                )}
              </>
            )}
          </>
        )}
      </section>
    </Main>
  );
};

export default Driving;
