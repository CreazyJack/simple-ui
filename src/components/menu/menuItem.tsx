/*
 * @Description: menuItem
 * @Date: 2021-05-02 12:34:46
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-11 16:27:58
 */

import { CSSProperties, FC, ReactNode } from 'react';
import useMenuItem from './hooks/useMenuItem';
import { SelectCallback } from './menu';

export interface MenuItemProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  index?: string;
  disabled?: boolean;
  onClick?: SelectCallback;
}

const MenuItem: FC<MenuItemProps> = (props) => {
  const { children, ...params } = useMenuItem(props);
  return <li {...params}>{children}</li>;
};

MenuItem.displayName = 'MenuItem';

export default MenuItem;
