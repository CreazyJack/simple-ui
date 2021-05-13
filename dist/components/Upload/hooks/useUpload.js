/*
 * @Description: upload hook
 * @Date: 2021-05-11 14:22:56
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-12 14:35:03
 */
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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
import { useRef, useState } from 'react';
import axios from 'axios';
var handleContent = function (children) { return children !== null && children !== void 0 ? children : 'Upload File'; };
var useUpload = function (props) {
    var onProgress = props.onProgress, onError = props.onError, onSuccess = props.onSuccess, beforeUpload = props.beforeUpload, action = props.action, onChange = props.onChange, defaultFileList = props.defaultFileList;
    var _a = useState(defaultFileList !== null && defaultFileList !== void 0 ? defaultFileList : []), fileList = _a[0], setFileList = _a[1];
    var fileInputRef = useRef(null);
    var children = handleContent(props.children);
    var onClick = function () {
        if (fileInputRef.current)
            fileInputRef.current.click();
    };
    var updateFileList = function (updateFile, updateParams) {
        setFileList(function (preFileList) {
            return preFileList.map(function (file) {
                if (file.uid === updateFile.uid)
                    return __assign(__assign({}, file), updateParams);
                return file;
            });
        });
    };
    var postFile = function (file) {
        var _file = {
            uid: Date.now() + "upload-file",
            status: 'ready',
            name: file.name,
            size: file.size,
            percent: 0,
            raw: file,
        };
        setFileList(__spreadArray([_file], fileList));
        var formData = new FormData();
        formData.append(file.name, file);
        axios({
            url: action,
            method: 'post',
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            onUploadProgress: function (e) {
                var percent = Math.round((e.loaded * 100) / e.total) || 0;
                if (percent < 100) {
                    updateFileList(_file, { percent: percent, status: 'uploading' });
                    if (onProgress)
                        onProgress(percent, _file);
                }
            },
        })
            .then(function (res) {
            updateFileList(_file, { status: 'success', response: res });
            if (onSuccess)
                onSuccess(res.data, _file);
            if (onChange)
                onChange(_file);
        })
            .catch(function (err) {
            updateFileList(_file, { status: 'failed', error: err });
            if (onError)
                onError(err, _file);
        });
    };
    var onFileChange = function (e) {
        var _a;
        var files = Array.from((_a = e.target.files) !== null && _a !== void 0 ? _a : []);
        if (files.length) {
            files.forEach(function (file) {
                if (!beforeUpload)
                    postFile(file);
                else {
                    var result = beforeUpload(file);
                    if (result instanceof Promise)
                        result.then(function (processedFile) { return postFile(processedFile); });
                    else if (result === true)
                        postFile(file);
                }
            });
            if (fileInputRef.current)
                fileInputRef.current.value = '';
        }
    };
    var onRemove = function (file) {
        setFileList(fileList.filter(function (item) { return item.uid !== file.uid; }));
        if (props.onRemove)
            props.onRemove(file);
    };
    return { children: children, fileInputRef: fileInputRef, onClick: onClick, onFileChange: onFileChange, onRemove: onRemove, fileList: fileList };
};
export default useUpload;
