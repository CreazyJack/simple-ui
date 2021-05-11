/*
 * @Description: menu
 * @Date: 2021-04-30 17:00:35
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-11 20:54:26
 */

import { CSSProperties, FC, FunctionComponentElement, ReactNode } from 'react';
import useMenu from './hooks/useMenu';
import MenuContext from './hooks/useMenuContext';
import MenuItem, { MenuItemProps } from './menuItem';
import SubMenu, { SubMenuProps } from './subMenu';

export type MenuMode = 'horizontal' | 'vertical';

export type SelectCallback = (selectedKey: string) => void;

export type MenuChildrenType =
  | FunctionComponentElement<SubMenuProps>
  | FunctionComponentElement<MenuItemProps>
  | Array<FunctionComponentElement<MenuItemProps> | FunctionComponentElement<SubMenuProps>>;

export interface MenuProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  mode?: MenuMode;
  defaultIndex?: string;
  activeIndex?: string;
  onSelect?: SelectCallback;
  defaultOpenIndex?: string;
}

interface ChildrenType {
  Item: FC<MenuItemProps>;
  SubMenu: FC<SubMenuProps>;
}

const Menu: FC<MenuProps> & ChildrenType = (props) => {
  const { children, onSelect, activeIndex, ...params } = useMenu(props);
  return (
    <ul {...params} data-testid="test-menu">
      <MenuContext.Provider
        value={{
          mode: props.mode,
          activeIndex,
          defaultOpenIndex: props.defaultOpenIndex,
          onSelect,
        }}
      >
        {children}
      </MenuContext.Provider>
    </ul>
  );
};

Menu.Item = MenuItem;
Menu.SubMenu = SubMenu;

Menu.defaultProps = {
  mode: 'horizontal',
};

export default Menu;
