/*
 * @Description: useMenuItem
 * @Date: 2021-05-02 12:38:32
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-06 14:52:36
 */

import { ReactNode, useContext } from 'react';
import classNames from 'classnames';
import { MenuItemProps } from '../MenuItem';
import MenuContext from './useMenuContext';

const handleContent = (children: ReactNode) => children;

const useMenuItem = (props: MenuItemProps) => {
  const { disabled, style, index = '' } = props;
  const { mode, activeIndex, onSelect } = useContext(MenuContext);
  const children = handleContent(props.children);
  const isActive = activeIndex === index;
  const className = classNames('sp-menu-item', props.className, {
    'menu-item-disabled': disabled,
    [`menu-item-${mode}`]: mode,
    'menu-item-active': !disabled && isActive,
  });

  const onClick = () => {
    if (disabled) return;
    if (props.onClick) props.onClick(index);
    if (onSelect) onSelect(index);
  };

  return { children, className, style, index, onClick };
};

export default useMenuItem;
