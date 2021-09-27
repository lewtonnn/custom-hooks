import React, { useState } from 'react';

import useTimeout from '../customHooks/useTimeout'

const Timeout = () => {

  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter => counter + 1);
  };

  const decrement = () => {
    setCounter(counter => counter - 1);
  }

  const {
    delayedFunction: incrementWithTimeout,
    resetTimeout: resetIncrementTimeout,
    cancelTimeout: dropIncrementTimeout
  } = useTimeout(increment, 1000);

  const {
    delayedFunction: decrementWithTimeout,
    resetTimeout: resetDecrementTimeout,
    cancelTimeout: dropDecrementTimeout
  } = useTimeout(decrement, 1000);

  return (
    <>
      <article className="timeout">
        <p>{counter}</p>
        <div>
          <button onClick={incrementWithTimeout}>INCREMENT AFTER 1 SEC</button>
          <button onClick={resetIncrementTimeout}>RESET</button>
          <button onClick={dropIncrementTimeout}>DROP</button>
        </div>
        <br/>
        <div>
          <button onClick={decrementWithTimeout}>DECREMENT AFTER 1 SEC</button>
          <button onClick={resetDecrementTimeout}>RESET</button>
          <button onClick={dropDecrementTimeout}>DROP</button>
        </div>
      </article>
    </>
  );
}

export default Timeout;
