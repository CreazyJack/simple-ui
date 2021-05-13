/*
 * @Description: input hook for controlling input value
 * @Date: 2021-05-03 16:25:38
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-04 23:01:18
 */
import { useState } from 'react';
var useInput = function () {
    var _a = useState(''), value = _a[0], setValue = _a[1];
    var onChange = function (callback) { return function (e) {
        if (callback)
            callback(e.target.value);
        setValue(e.target.value);
    }; };
    return [value, onChange];
};
export default useInput;
