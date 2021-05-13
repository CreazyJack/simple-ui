import { FC, ReactNode } from 'react';
export declare type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'failed';
export declare type OnRemoveType = (file: UploadFileProps) => void;
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
    defaultFileList: UploadFileProps[];
    onChange?: (file: UploadFileProps) => void;
    beforeUpload?: (file: File) => boolean | Promise<File>;
    onProgress?: (percent: number, file: UploadFileProps) => void;
    onSuccess?: (data: unknown, file: UploadFileProps) => void;
    onError?: (error: unknown, file: UploadFileProps) => void;
    onRemove?: OnRemoveType;
}
declare const Upload: FC<UploadProps>;
export default Upload;
