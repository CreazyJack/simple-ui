/*
 * @Description: debounce hook
 * @Date: 2021-05-10 16:42:45
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-10 21:02:48
 */

import { useCallback, useEffect, useRef } from 'react';

type Fn = (...args: unknown[]) => void;

type UseDebounceType = (fn: Fn, delay?: number) => Fn;

const useDebounce: UseDebounceType = (fn, delay = 300) => {
  const { current } = useRef<{ fn: Fn; timer: NodeJS.Timeout | null }>({ fn, timer: null });
  const debounce = useCallback(
    (...args) => {
      if (current.timer) clearTimeout(current.timer);
      current.timer = setTimeout(() => current.fn(...args), delay);
    },
    [current, delay],
  );

  useEffect(() => {
    current.fn = fn;
  }, [fn, delay, current]);

  return debounce;
};

export default useDebounce;
