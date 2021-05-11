/*
 * @Description: upload
 * @Date: 2021-05-11 14:05:14
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-11 15:54:40
 */

import { FC } from 'react';
import Button from '../button/button';
import useUpload from './hooks/useUpload';

export interface UploadProps {
  action: string;
  label?: string;
  onProgress?: (percentage: number, file: File) => void;
  onSuccess?: (data: unknown, file: File) => void;
  onError?: (error: unknown, file: File) => void;
}

const Upload: FC<UploadProps> = (props) => {
  const { fileInputRef, onClick } = useUpload(props);
  return (
    <div>
      <Button onClick={onClick}>{props.label ?? 'Upload File'}</Button>
      <input style={{ display: 'none' }} type="file" ref={fileInputRef} />
    </div>
  );
};

export default Upload;
