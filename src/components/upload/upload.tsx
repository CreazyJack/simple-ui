/*
 * @Description: upload
 * @Date: 2021-05-11 14:05:14
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-11 20:54:48
 */

import { FC, ReactNode } from 'react';
import Button from '../button/button';
import useUpload from './hooks/useUpload';

export type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'failed';

export interface UploadFileProps {
  uid: string;
  size: number;
  name: string;
  status?: UploadFileStatus;
  percent?: number;
  raw?: File;
  response?: unknown;
  error?: unknown;
}

export interface UploadProps {
  children?: ReactNode;
  action?: string;
  onChange?: (file: File) => void; // 文件上传成功后调用
  beforeUpload?: (file: File) => boolean | Promise<File>;
  onProgress?: (percentage: number, file: File) => void;
  onSuccess?: (data: unknown, file: File) => void; // 文件上传成功后调用
  onError?: (error: unknown, file: File) => void;
}

const Upload: FC<UploadProps> = (props) => {
  const { children, fileInputRef, onClick, onFileChange } = useUpload(props);
  return (
    <div>
      <Button onClick={onClick}>{children}</Button>
      <input style={{ display: 'none' }} type="file" ref={fileInputRef} onChange={onFileChange} />
    </div>
  );
};

export default Upload;
