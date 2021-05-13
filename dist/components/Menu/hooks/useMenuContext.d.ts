/// <reference types="react" />
import { SelectCallback, MenuMode } from '../Menu';
interface MenuContextProps {
    mode?: MenuMode;
    activeIndex?: string;
    onSelect?: SelectCallback;
    defaultOpenIndex?: string;
}
declare const MenuContext: import("react").Context<MenuContextProps>;
export default MenuContext;
