/*
 * @Description: button hook
 * @Date: 2021-04-27 20:19:01
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-12 14:33:22
 */
import classNames from 'classnames';
var handleContent = function (children) {
    if (children)
        return children;
    throw Error('Button should have children which is not null or undefined');
};
var useButton = function (props) {
    var _a;
    var type = props.type, size = props.size, disabled = props.disabled, danger = props.danger, onClick = props.onClick, target = props.target, href = props.href, style = props.style;
    var children = handleContent(props.children);
    var isLink = type === 'link';
    var className = classNames('sp-btn', props.className, (_a = {},
        _a["btn-" + type] = type,
        _a["btn-" + size] = size,
        _a['btn-disabled'] = disabled,
        _a['btn-danger'] = danger,
        _a['btn-disabled-link'] = isLink && disabled,
        _a));
    return {
        className: className,
        children: children,
        disabled: disabled,
        onClick: disabled ? undefined : onClick,
        target: isLink ? target : undefined,
        href: disabled ? undefined : href,
        style: style,
    };
};
export default useButton;
