import { UploadFileProps } from '..';
import { UploadListProps } from '../UploadList';
declare const useUploadList: (props: UploadListProps) => {
    className: string;
    onRemove: (file: UploadFileProps) => void;
};
export default useUploadList;
