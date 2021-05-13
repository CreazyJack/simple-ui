import { ChangeEvent, ReactNode } from 'react';
import { UploadFileProps, UploadProps } from '../';
declare const useUpload: (props: UploadProps) => {
    children: ReactNode;
    fileInputRef: import("react").MutableRefObject<HTMLInputElement>;
    onClick: () => void;
    onFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onRemove: (file: UploadFileProps) => void;
    fileList: UploadFileProps[];
};
export default useUpload;
