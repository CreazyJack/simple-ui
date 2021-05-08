/*
 * @Description: menu context
 * @Date: 2021-05-04 12:06:18
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-04 16:53:04
 */

import { createContext } from 'react';
import { SelectCallback, MenuMode } from '../menu';

type MenuContextProps = {
  mode?: MenuMode;
  activeIndex?: string;
  onSelect?: SelectCallback;
  defaultOpenIndex?: string;
};

const MenuContext = createContext<MenuContextProps>({});

export default MenuContext;
