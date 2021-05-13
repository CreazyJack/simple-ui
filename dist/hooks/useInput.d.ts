import { ChangeEvent } from 'react';
declare type OnChangeType = (callback?: (v: string) => void) => (e: ChangeEvent<HTMLInputElement>) => void;
declare type UseInputType = () => [string, OnChangeType];
declare const useInput: UseInputType;
export default useInput;
