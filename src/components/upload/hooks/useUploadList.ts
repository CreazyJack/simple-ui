/*
 * @Description: UploadList hook
 * @Date: 2021-05-12 14:43:50
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-12 14:49:12
 */

import { UploadFileProps } from '..';
import { UploadListProps } from '../UploadList';

const useUploadList = (props: UploadListProps) => {
  const className = 'simple-upload-list';
  const onRemove = (file: UploadFileProps) => {
    props.onRemove && props.onRemove(file);
  };
  return { className, onRemove };
};

export default useUploadList;
