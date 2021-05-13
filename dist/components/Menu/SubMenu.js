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
import { FiChevronDown } from 'react-icons/fi';
import ZoomTransition from '../transition/zoom';
import RotateTransition from '../transition/rotate';
import useSubMenu from './hooks/useSubMenu';
var SubMenu = function (props) {
    var _a = useSubMenu(props), children = _a.children, onUlHover = _a.onUlHover, onTitleClick = _a.onTitleClick, boxClass = _a.boxClass, ulClass = _a.ulClass, visible = _a.visible;
    return (_jsxs("li", __assign({ className: boxClass }, onUlHover, { children: [_jsxs("div", __assign({ className: "sub-menu-title", onClick: onTitleClick }, { children: [_jsx("div", { children: props.title }, void 0),
                    _jsx("div", __assign({ className: "sub-menu-title-suffix" }, { children: _jsx(RotateTransition, __assign({ active: visible }, { children: _jsx(FiChevronDown, { className: "sub-menu-title-suffix-icon" }, void 0) }), void 0) }), void 0)] }), void 0),
            _jsx(ZoomTransition, __assign({ active: visible, timeout: 300 }, { children: _jsx("ul", __assign({ className: ulClass }, { children: children }), void 0) }), void 0)] }), void 0));
};
SubMenu.displayName = 'SubMenu';
export default SubMenu;
