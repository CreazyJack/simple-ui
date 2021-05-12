/*
 * @Description: 未添加描述
 * @Date: 2021-05-12 14:40:38
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-12 15:44:40
 */

import { FC } from 'react';
import { OnRemoveType, UploadFileProps } from '.';
import useUploadList from './hooks/useUploadList';

export interface UploadListProps {
  fileList: UploadFileProps[];
  onRemove: OnRemoveType;
}

const UploadList: FC<UploadListProps> = (props) => {
  const { className } = useUploadList(props);
  return (
    <ul className={className}>
      {props.fileList.map((file) => {
        return <li key={file.uid}>{file.name}</li>;
      })}
    </ul>
  );
};

export default UploadList;
