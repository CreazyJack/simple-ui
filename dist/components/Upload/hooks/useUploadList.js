/*
 * @Description: UploadList hook
 * @Date: 2021-05-12 14:43:50
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-12 14:49:12
 */
var useUploadList = function (props) {
    var className = 'simple-upload-list';
    var onRemove = function (file) {
        props.onRemove && props.onRemove(file);
    };
    return { className: className, onRemove: onRemove };
};
export default useUploadList;
