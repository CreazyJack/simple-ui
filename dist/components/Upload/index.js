var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Button from '../Button/Button';
import useUpload from './hooks/useUpload';
import UploadList from './UploadList';
var Upload = function (props) {
    var _a = useUpload(props), children = _a.children, fileInputRef = _a.fileInputRef, onClick = _a.onClick, onFileChange = _a.onFileChange, onRemove = _a.onRemove, fileList = _a.fileList;
    return (_jsxs("div", { children: [_jsx(Button, __assign({ onClick: onClick }, { children: children }), void 0),
            _jsx("input", { style: { display: 'none' }, type: "file", ref: fileInputRef, onChange: onFileChange }, void 0),
            _jsx(UploadList, { fileList: fileList, onRemove: onRemove }, void 0)] }, void 0));
};
export default Upload;
