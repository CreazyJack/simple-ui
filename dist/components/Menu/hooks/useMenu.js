/*
 * @Description: menu hook
 * @Date: 2021-05-02 12:13:22
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-07 15:59:13
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
import { Children, cloneElement, useState } from 'react';
import classNames from 'classnames';
var handleContent = function (children) {
    var nodes = Children.map(children, function (child, index) {
        var _a, _b;
        if (child) {
            var childName = (_b = (_a = child === null || child === void 0 ? void 0 : child.type) === null || _a === void 0 ? void 0 : _a.displayName) !== null && _b !== void 0 ? _b : '';
            if (childName === 'SubMenu')
                return child;
            if (childName === 'MenuItem') {
                var node = cloneElement(child, __assign({ index: String(index) }, child.props));
                return node;
            }
            throw Error('Error: Menu has a child which is not MenuItem or SubMenu');
        }
        return null;
    });
    return nodes;
};
var useMenu = function (props) {
    var _a;
    var _b, _c;
    var mode = props.mode, style = props.style;
    var children = handleContent(props.children);
    var _d = useState((_c = (_b = props.activeIndex) !== null && _b !== void 0 ? _b : props.defaultIndex) !== null && _c !== void 0 ? _c : ''), activeIndex = _d[0], setActiveIndex = _d[1];
    var className = classNames('sp-menu', props.className, (_a = {},
        _a["menu-" + mode] = mode,
        _a));
    // this onSelect will be used by menuItem
    var onSelect = function (selectedKey) {
        if (props.activeIndex == null)
            setActiveIndex(selectedKey);
        if (props.onSelect)
            props.onSelect(selectedKey);
    };
    return { children: children, className: className, style: style, onSelect: onSelect, activeIndex: activeIndex };
};
export default useMenu;
