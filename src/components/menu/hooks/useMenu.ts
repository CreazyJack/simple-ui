/*
 * @Description: menu hook
 * @Date: 2021-05-02 12:13:22
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-07 15:59:13
 */

import { Children, cloneElement, FunctionComponentElement, ReactNode, useState } from 'react';
import classNames from 'classnames';
import { MenuChildrenType, MenuProps, SelectCallback } from '../Menu';
import { MenuItemProps } from '../MenuItem';

const handleContent = (children?: ReactNode) => {
  const nodes = Children.map(children as MenuChildrenType, (child, index) => {
    if (child) {
      const childName = child?.type?.displayName ?? '';
      if (childName === 'SubMenu') return child;
      if (childName === 'MenuItem') {
        const node = cloneElement(child as FunctionComponentElement<MenuItemProps>, {
          index: String(index),
          ...child.props,
        });
        return node;
      }
      throw Error('Error: Menu has a child which is not MenuItem or SubMenu');
    }
    return null;
  });
  return nodes;
};

const useMenu = (props: MenuProps) => {
  const { mode, style } = props;
  const children = handleContent(props.children);
  const [activeIndex, setActiveIndex] = useState(props.activeIndex ?? props.defaultIndex ?? '');
  const className = classNames('sp-menu', props.className, {
    [`menu-${mode}`]: mode,
  });
  // this onSelect will be used by menuItem
  const onSelect: SelectCallback = (selectedKey) => {
    if (props.activeIndex == null) setActiveIndex(selectedKey);
    if (props.onSelect) props.onSelect(selectedKey);
  };

  return { children, className, style, onSelect, activeIndex };
};

export default useMenu;
