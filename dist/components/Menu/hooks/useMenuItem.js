/*
 * @Description: useMenuItem
 * @Date: 2021-05-02 12:38:32
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-06 14:52:36
 */
import { useContext } from 'react';
import classNames from 'classnames';
import MenuContext from './useMenuContext';
var handleContent = function (children) { return children; };
var useMenuItem = function (props) {
    var _a;
    var disabled = props.disabled, style = props.style, _b = props.index, index = _b === void 0 ? '' : _b;
    var _c = useContext(MenuContext), mode = _c.mode, activeIndex = _c.activeIndex, onSelect = _c.onSelect;
    var children = handleContent(props.children);
    var isActive = activeIndex === index;
    var className = classNames('sp-menu-item', props.className, (_a = {
            'menu-item-disabled': disabled
        },
        _a["menu-item-" + mode] = mode,
        _a['menu-item-active'] = !disabled && isActive,
        _a));
    var onClick = function () {
        if (disabled)
            return;
        if (props.onClick)
            props.onClick(index);
        if (onSelect)
            onSelect(index);
    };
    return { children: children, className: className, style: style, index: index, onClick: onClick };
};
export default useMenuItem;
