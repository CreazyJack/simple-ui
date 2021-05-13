/// <reference types="react" />
import { ButtonProps } from '../Button';
declare const useButton: (props: ButtonProps) => {
    className: string;
    children: true | import("react").ReactChild | import("react").ReactFragment | import("react").ReactPortal;
    disabled: boolean;
    onClick: import("react").MouseEventHandler<HTMLElement>;
    target: string;
    href: string;
    style: import("react").CSSProperties;
};
export default useButton;
