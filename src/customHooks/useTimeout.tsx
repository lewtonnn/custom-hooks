import React, { useCallback, useRef } from 'react';

const useTimeout = (callback: Function, delay: number) => {

  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const delayedFunction = () => {
    timeoutRef.current = setTimeout(() => {
      callback();
      timeoutRef.current = undefined;
    }, delay);
  };

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      delayedFunction();
    }
  };

  const cancelTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }, []);

  return { delayedFunction, resetTimeout, cancelTimeout };
};

export default useTimeout;
