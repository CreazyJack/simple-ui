/*
 * @Description: button hook
 * @Date: 2021-04-27 20:19:01
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-12 14:33:22
 */

import { ReactNode } from 'react';
import classNames from 'classnames';
import { ButtonProps } from '../Button';

const handleContent = (children?: ReactNode) => {
  if (children) return children;
  throw Error('Button should have children which is not null or undefined');
};

const useButton = (props: ButtonProps) => {
  const { type, size, disabled, danger, onClick, target, href, style } = props;
  const children = handleContent(props.children);
  const isLink = type === 'link';
  const className = classNames('sp-btn', props.className, {
    [`btn-${type}`]: type,
    [`btn-${size}`]: size,
    'btn-disabled': disabled,
    'btn-danger': danger,
    'btn-disabled-link': isLink && disabled,
  });

  return {
    className,
    children,
    disabled,
    onClick: disabled ? undefined : onClick,
    target: isLink ? target : undefined,
    href: disabled ? undefined : href,
    style,
  };
};

export default useButton;
