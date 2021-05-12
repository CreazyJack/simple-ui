/*
 * @Description: menu context
 * @Date: 2021-05-04 12:06:18
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-11 16:03:41
 */

import { createContext } from 'react';
import { SelectCallback, MenuMode } from '../Menu';

interface MenuContextProps {
  mode?: MenuMode;
  activeIndex?: string;
  onSelect?: SelectCallback;
  defaultOpenIndex?: string;
}

const MenuContext = createContext<MenuContextProps>({});

export default MenuContext;
