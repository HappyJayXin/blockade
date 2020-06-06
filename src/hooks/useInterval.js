import { useEffect, useRef } from 'react';

const useInterval = (callback, delay) => {
  const savedCallback = useRef(() => {});

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    if (delay !== null) {
      const interval = setInterval(function intervalFn() {
        savedCallback.current();
        return intervalFn;
      }(), delay || 0);

      return () => clearInterval(interval);
    }

    return undefined;
  }, [delay]);
};

export default useInterval;