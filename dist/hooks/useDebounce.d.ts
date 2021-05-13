declare type Fn = (...args: unknown[]) => void;
declare type UseDebounceType = (fn: Fn, delay?: number) => Fn;
declare const useDebounce: UseDebounceType;
export default useDebounce;
