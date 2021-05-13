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
import useMenu from './hooks/useMenu';
import MenuContext from './hooks/useMenuContext';
import MenuItem from './MenuItem';
import SubMenu from './SubMenu';
var Menu = function (props) {
    var _a = useMenu(props), children = _a.children, onSelect = _a.onSelect, activeIndex = _a.activeIndex, params = __rest(_a, ["children", "onSelect", "activeIndex"]);
    return (_jsx("ul", __assign({}, params, { "data-testid": "test-menu" }, { children: _jsx(MenuContext.Provider, __assign({ value: {
                mode: props.mode,
                activeIndex: activeIndex,
                defaultOpenIndex: props.defaultOpenIndex,
                onSelect: onSelect,
            } }, { children: children }), void 0) }), void 0));
};
Menu.Item = MenuItem;
Menu.SubMenu = SubMenu;
Menu.defaultProps = {
    mode: 'horizontal',
};
export default Menu;
