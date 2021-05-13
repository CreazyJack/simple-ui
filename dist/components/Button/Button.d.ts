/// <reference types="react" />
declare type ButtonType = 'default' | 'primary' | 'link';
declare type ButtonShape = 'circle' | 'round';
declare type SizeType = 'small' | 'middle' | 'large';
declare type ButtonHTMLType = 'submit' | 'button' | 'reset';
declare type AnchorButtonProps = {
    href: string;
    target?: string;
    onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps & Omit<React.AnchorHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick'>;
declare type NativeButtonProps = {
    htmlType?: ButtonHTMLType;
    onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick'>;
interface BaseButtonProps {
    type?: ButtonType;
    icon?: React.ReactNode;
    shape?: ButtonShape;
    size?: SizeType;
    loading?: boolean | {
        delay?: number;
    };
    prefixCls?: string;
    ghost?: boolean;
    danger?: boolean;
    block?: boolean;
}
export declare type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>;
declare const Button: React.FC<ButtonProps>;
export default Button;
