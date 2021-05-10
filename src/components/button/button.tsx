/*
 * @Description: button
 * @Date: 2021-04-27 17:54:20
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-10 14:48:49
 */

import useButton from './hooks/useButton';

type ButtonType = 'default' | 'primary' | 'ghost' | 'dashed' | 'link' | 'text';

type ButtonShape = 'circle' | 'round';

type SizeType = 'small' | 'middle' | 'large';

type ButtonHTMLType = 'submit' | 'button' | 'reset';

type AnchorButtonProps = {
  href: string;
  target?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick'>;

type NativeButtonProps = {
  htmlType?: ButtonHTMLType;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick'>;

type BaseButtonProps = {
  type?: ButtonType;
  icon?: React.ReactNode;
  shape?: ButtonShape;
  size?: SizeType;
  loading?: boolean | { delay?: number };
  prefixCls?: string; // 前缀
  ghost?: boolean;
  danger?: boolean;
  block?: boolean;
};

export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>;

const Button: React.FC<ButtonProps> = (props) => {
  const { children, ...params } = useButton(props);

  if (!props.children) return null;
  if (props.type === 'link') return <a {...params}>{children}</a>;
  return <button {...params}>{children}</button>;
};

Button.defaultProps = {
  type: 'default',
  shape: 'round',
  size: 'middle',
};

export default Button;
