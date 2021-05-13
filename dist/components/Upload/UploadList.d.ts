import { FC } from 'react';
import { OnRemoveType, UploadFileProps } from '.';
export interface UploadListProps {
    fileList: UploadFileProps[];
    onRemove: OnRemoveType;
}
declare const UploadList: FC<UploadListProps>;
export default UploadList;
