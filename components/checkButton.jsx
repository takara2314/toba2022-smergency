import { useEffect, useState } from 'react';

const CheckButton = ({ okHandler, messageHandler, callHandler }) => {
  const [count, setCount] = useState(15);

  useEffect(() => {
    console.log('start');
    if (count > 0) {
      const id = setInterval(countDown, 1000);
      return () => {
        clearInterval(id);
      };
    }

    callHandler();
  }, [count]);

  const countDown = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className="flex flex-row justify-between">
        <button
          className="w-[47%] bg-neutral-500 text-xl rounded-xl p-8"
          onClick={okHandler}
        >
          {'I\'m OK'}
        </button>
        <button
          className="w-[47%] bg-neutral-500 text-xl rounded-xl p-8"
          onCheck={messageHandler}
        >
          Quick text message
        </button>
      </div>
      <button
        className="w-full bg-red-500 text-xl rounded-xl p-8"
        onCheck={callHandler}
      >
        Call emergency services ... {count}
      </button>
    </>
  );
};

export default CheckButton;
