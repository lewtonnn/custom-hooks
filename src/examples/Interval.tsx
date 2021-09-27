import React, { useState } from 'react';

import useTimeout from '../customHooks/useInterval'

const Interval = () => {

  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter => counter + 1);
  };

  const {
    repeatedFunction: IncrementEverySecond,
    cancelInterval: cancelIncrement,
  } = useTimeout(increment, 1000);

  return (
    <>
      <article className="interval">
        <p>{counter}</p>
        <div>
          <button onClick={IncrementEverySecond}>INCREMENT EVERY SECOND</button>
          <button onClick={cancelIncrement}>CANCEL INCREMENT</button>
        </div>
      </article>
    </>
  );
}

export default Interval;
