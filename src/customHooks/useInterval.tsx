import React, { useCallback, useRef } from 'react';

const useInterval = (callback: Function, delay: number) => {

  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  const repeatedFunction = () => {
    intervalRef.current = setInterval(() => {
      callback();
    }, delay);
  };

  const cancelInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }, []);

  return { repeatedFunction, cancelInterval };
};

export default useInterval;
