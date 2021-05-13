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
import { jsx as _jsx } from "react/jsx-runtime";
import useUploadList from './hooks/useUploadList';
var UploadList = function (props) {
    var className = useUploadList(props).className;
    return (_jsx("ul", __assign({ className: className }, { children: props.fileList.map(function (file) {
            return _jsx("li", { children: file.name }, file.uid);
        }) }), void 0));
};
export default UploadList;
