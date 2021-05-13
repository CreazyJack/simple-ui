import { CSSProperties, FC, ReactNode } from 'react';
import { SelectCallback } from './Menu';
export interface MenuItemProps {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
    index?: string;
    disabled?: boolean;
    onClick?: SelectCallback;
}
declare const MenuItem: FC<MenuItemProps>;
export default MenuItem;
