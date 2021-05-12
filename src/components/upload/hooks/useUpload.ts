/*
 * @Description: upload hook
 * @Date: 2021-05-11 14:22:56
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-12 09:36:01
 */

import { ChangeEvent, ReactNode, useRef, useState } from 'react';
import { UploadFileProps, UploadProps } from '../upload';
import axios from 'axios';

const handleContent = (children: ReactNode) => children ?? 'Upload File';

const useUpload = (props: UploadProps) => {
  const { onProgress, onError, onSuccess, beforeUpload, action, onChange } = props;
  const [fileList, setFileList] = useState<UploadFileProps[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const children = handleContent(props.children);

  const onClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const postFile = (file: File) => {
    const _file: UploadFileProps = {
      uid: `${Date.now()}upload-file`,
      status: 'ready',
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file,
    };
    setFileList([_file, ...fileList]);
    const formData = new FormData();
    formData.append(file.name, file);
    axios({
      url: action,
      method: 'post',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress(e) {
        const percentage = Math.round((e.loaded * 100) / e.total) || 0;
        if (percentage < 100 && onProgress) onProgress(percentage, file);
      },
    })
      .then((res) => {
        if (onSuccess) onSuccess(res.data, file);
        if (onChange) onChange(file);
      })
      .catch((err) => {
        if (onError) onError(err, file);
      });
  };

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    if (files.length) {
      files.forEach((file) => {
        if (!beforeUpload) postFile(file);
        else {
          const result = beforeUpload(file);
          if (result instanceof Promise) result.then((processedFile) => postFile(processedFile));
          else if (result === true) postFile(file);
        }
      });
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  return { children, fileInputRef, onClick, onFileChange };
};

export default useUpload;
