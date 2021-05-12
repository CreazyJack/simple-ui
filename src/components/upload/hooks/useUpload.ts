/*
 * @Description: upload hook
 * @Date: 2021-05-11 14:22:56
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-12 14:35:03
 */

import { ChangeEvent, ReactNode, useRef, useState } from 'react';
import { UploadFileProps, UploadProps } from '../';
import axios from 'axios';

const handleContent = (children: ReactNode) => children ?? 'Upload File';

const useUpload = (props: UploadProps) => {
  const { onProgress, onError, onSuccess, beforeUpload, action, onChange, defaultFileList } = props;
  const [fileList, setFileList] = useState<UploadFileProps[]>(defaultFileList ?? []);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const children = handleContent(props.children);

  const onClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const updateFileList = (updateFile: UploadFileProps, updateParams: Partial<UploadFileProps>) => {
    setFileList((preFileList) => {
      return preFileList.map((file) => {
        if (file.uid === updateFile.uid) return { ...file, ...updateParams };
        return file;
      });
    });
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
        const percent = Math.round((e.loaded * 100) / e.total) || 0;
        if (percent < 100) {
          updateFileList(_file, { percent, status: 'uploading' });
          if (onProgress) onProgress(percent, _file);
        }
      },
    })
      .then((res) => {
        updateFileList(_file, { status: 'success', response: res });
        if (onSuccess) onSuccess(res.data, _file);
        if (onChange) onChange(_file);
      })
      .catch((err) => {
        updateFileList(_file, { status: 'failed', error: err });
        if (onError) onError(err, _file);
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

  const onRemove = (file: UploadFileProps) => {
    setFileList(fileList.filter((item) => item.uid !== file.uid));
    if (props.onRemove) props.onRemove(file);
  };

  return { children, fileInputRef, onClick, onFileChange, onRemove, fileList };
};

export default useUpload;
