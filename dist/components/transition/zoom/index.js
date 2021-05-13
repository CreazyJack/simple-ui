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
import { CSSTransition } from 'react-transition-group';
var ZoomTransition = function (props) {
    var children = props.children, direction = props.direction, active = props.active, unmountOnExit = props.unmountOnExit, timeout = props.timeout, wrapper = props.wrapper;
    return (_jsx(CSSTransition, __assign({ in: active, timeout: timeout !== null && timeout !== void 0 ? timeout : 300, classNames: "zoom-in-" + (direction !== null && direction !== void 0 ? direction : 'top'), unmountOnExit: unmountOnExit !== null && unmountOnExit !== void 0 ? unmountOnExit : true }, { children: wrapper ? _jsx("div", { children: children }, void 0) : children }), void 0));
};
export default ZoomTransition;
