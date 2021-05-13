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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
/*
 * @Description: button
 * @Date: 2021-04-27 17:54:20
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-11 16:30:48
 */
import useButton from './hooks/useButton';
var Button = function (props) {
    var _a = useButton(props), children = _a.children, params = __rest(_a, ["children"]);
    if (!props.children)
        return null;
    if (props.type === 'link')
        return _jsx("a", __assign({}, params, { children: children }), void 0);
    return _jsx("button", __assign({}, params, { children: children }), void 0);
};
Button.defaultProps = {
    type: 'default',
    shape: 'round',
    size: 'middle',
};
export default Button;
