/** @format */

import { DependencyList, useEffect, useRef } from 'react';

export const useOnInit = (callback: () => void, deps: DependencyList = [], timing: number = 500) => {
  const timeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    timeout.current = setTimeout(() => {
      callback();
    }, timing);
    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, deps);
};
