/*
 * @Description: upload hook
 * @Date: 2021-05-11 14:22:56
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-11 15:53:12
 */

import { useRef } from 'react';
import { UploadProps } from '../upload';

const useUpload = (props: UploadProps) => {
  console.log(props);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const onClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };
  return { fileInputRef, onClick };
};

export default useUpload;
