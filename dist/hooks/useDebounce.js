/*
 * @Description: debounce hook
 * @Date: 2021-05-10 16:42:45
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-10 21:02:48
 */
import { useCallback, useEffect, useRef } from 'react';
var useDebounce = function (fn, delay) {
    if (delay === void 0) { delay = 300; }
    var current = useRef({ fn: fn, timer: null }).current;
    var debounce = useCallback(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (current.timer)
            clearTimeout(current.timer);
        current.timer = setTimeout(function () { return current.fn.apply(current, args); }, delay);
    }, [current, delay]);
    useEffect(function () {
        current.fn = fn;
    }, [fn, delay, current]);
    return debounce;
};
export default useDebounce;
