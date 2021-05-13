import { CSSProperties, FC, FunctionComponentElement, ReactNode } from 'react';
import { MenuItemProps } from './MenuItem';
import { SubMenuProps } from './SubMenu';
export declare type MenuMode = 'horizontal' | 'vertical';
export declare type SelectCallback = (selectedKey: string) => void;
export declare type MenuChildrenType = FunctionComponentElement<SubMenuProps> | FunctionComponentElement<MenuItemProps> | Array<FunctionComponentElement<MenuItemProps> | FunctionComponentElement<SubMenuProps>>;
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
declare const Menu: FC<MenuProps> & ChildrenType;
export default Menu;
