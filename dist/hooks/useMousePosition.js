/*
 * @Description: mouse position listener
 * @Date: 2021-04-27 09:59:08
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-12 10:16:13
 */
import { useEffect, useState } from 'react';
var useMousePosition = function () {
    var _a = useState({ x: 0, y: 0 }), positions = _a[0], setPositions = _a[1];
    useEffect(function () {
        var updatePositions = function (e) { return setPositions({ x: e.clientX, y: e.clientY }); };
        // add click listener
        document.addEventListener('click', updatePositions);
        // clear click listener
        return function () { return document.removeEventListener('click', updatePositions); };
    }, []);
    return positions;
};
export default useMousePosition;
