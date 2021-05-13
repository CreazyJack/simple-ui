import { CSSProperties, FC, FunctionComponentElement, ReactNode } from 'react';
import { MenuItemProps } from './MenuItem';
export declare type SubMenuChildrenType = FunctionComponentElement<MenuItemProps> | Array<FunctionComponentElement<MenuItemProps>>;
export interface SubMenuProps {
    className?: string;
    style?: CSSProperties;
    title: string;
    children?: ReactNode;
}
declare const SubMenu: FC<SubMenuProps>;
export default SubMenu;
