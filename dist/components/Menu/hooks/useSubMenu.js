/*
 * @Description: SubMenu hook
 * @Date: 2021-05-06 10:14:08
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-08 12:56:43
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
import { Children, cloneElement, useContext, useState } from 'react';
import classNames from 'classnames';
import MenuContext from './useMenuContext';
var handleContent = function (children, title) {
    var nodes = Children.map(children, function (child, index) {
        var _a, _b;
        if (child) {
            var childName = (_b = (_a = child === null || child === void 0 ? void 0 : child.type) === null || _a === void 0 ? void 0 : _a.displayName) !== null && _b !== void 0 ? _b : '';
            if (childName === 'MenuItem') {
                var node = cloneElement(child, __assign({ index: title + "-" + index }, child.props));
                return node;
            }
            throw Error('Error: SubMenu has a child which is not MenuItem');
        }
        return null;
    });
    return nodes;
};
var useSubMenu = function (props) {
    var _a;
    var _b = useContext(MenuContext), mode = _b.mode, activeIndex = _b.activeIndex, defaultOpenIndex = _b.defaultOpenIndex;
    var children = handleContent(props.children, props.title);
    var isVisible = false;
    var isActive = false;
    Children.forEach(children, function (child) {
        if ((child === null || child === void 0 ? void 0 : child.props.index) === defaultOpenIndex)
            isVisible = true;
        if ((child === null || child === void 0 ? void 0 : child.props.index) === activeIndex)
            isActive = true;
    });
    var _c = useState(isVisible), visible = _c[0], setVisible = _c[1];
    var isHorizontal = mode === 'horizontal';
    var boxClass = classNames('sp-sub-menu', 'sp-menu-item', props.className, (_a = {},
        _a["menu-item-" + mode] = mode,
        _a['menu-item-active'] = isActive,
        _a));
    var ulClass = classNames('sub-menu-ul', {
        'sub-menu-vertical': mode === 'vertical',
    });
    var timer;
    var onUlMouseEnter = isHorizontal
        ? function (e) {
            e.stopPropagation();
            clearTimeout(timer);
            // setVisible(true);
            timer = setTimeout(function () {
                setVisible(true);
            }, 100);
        }
        : undefined;
    var onUlMouseLeave = isHorizontal
        ? function (e) {
            e.stopPropagation();
            clearTimeout(timer);
            // setVisible(false);
            timer = setTimeout(function () {
                setVisible(false);
            }, 100);
        }
        : undefined;
    var onTitleClick = isHorizontal
        ? undefined
        : function (e) {
            e.stopPropagation();
            setVisible(!visible);
            // setTimeout(() => {
            //   setVisible(!visible);
            // }, 300);
        };
    return {
        children: children,
        visible: visible,
        boxClass: boxClass,
        ulClass: ulClass,
        onTitleClick: onTitleClick,
        onUlHover: {
            onMouseEnter: onUlMouseEnter,
            onMouseLeave: onUlMouseLeave,
        },
    };
};
export default useSubMenu;
