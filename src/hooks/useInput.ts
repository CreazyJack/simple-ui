/*
 * @Description: input hook for controlling input value
 * @Date: 2021-05-03 16:25:38
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-04 23:01:18
 */

import { useState, ChangeEvent } from 'react';

type OnChangeType = (callback?: (v: string) => void) => (e: ChangeEvent<HTMLInputElement>) => void;

type UseInputType = () => [string, OnChangeType];

const useInput: UseInputType = () => {
  const [value, setValue] = useState('');
  const onChange: OnChangeType = (callback) => (e) => {
    if (callback) callback(e.target.value);
    setValue(e.target.value);
  };

  return [value, onChange];
};

export default useInput;
