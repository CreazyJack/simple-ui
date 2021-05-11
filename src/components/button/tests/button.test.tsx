/*
 * @Description: button component test
 * @Date: 2021-04-29 17:20:06
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-11 18:06:09
 */
import { render, fireEvent } from '@testing-library/react';
import Button, { ButtonProps } from '../button';

const defaultProps: ButtonProps = { type: 'default', shape: 'round', size: 'middle' };

const differentProps: ButtonProps = {
  ...defaultProps,
  size: 'large',
  type: 'primary',
  danger: true,
  onClick: jest.fn(),
};

const linkProps: ButtonProps = {
  ...differentProps,
  type: 'link',
  href: 'https://www.baidu.com',
};

const disabledProps: ButtonProps = {
  ...differentProps,
  disabled: true,
};

const disabledLinkProps: ButtonProps = {
  ...linkProps,
  ...disabledProps,
};

const test = (props: ButtonProps) => () => {
  const { type, className, size, disabled, onClick, danger } = props;
  const tagname = type === 'link' ? 'A' : 'BUTTON';
  const text = 'this is button text';
  const wrapper = render(<Button {...props}>{text}</Button>);
  const element = wrapper.getByText(text);
  // base test
  expect(element).toBeInTheDocument();
  expect(element.tagName).toBe(tagname);
  expect(element).toHaveClass('sp-btn');
  // className test
  if (className) expect(element).toHaveClass(className);
  if (size) expect(element).toHaveClass(`btn-${size}`);
  if (type) expect(element).toHaveClass(`btn-${type}`);
  if (disabled) expect(element).toHaveClass('btn-disabled');
  if (danger) expect(element).toHaveClass('btn-danger');
  if (disabled && type === 'link') expect(element).toHaveClass('btn-disabled-link');
  // click test
  if (onClick) {
    fireEvent.click(element);
    if (!disabled) expect(onClick).toHaveBeenCalled();
    else expect(onClick).not.toHaveBeenCalled();
  }
  // native props test
  if (disabled) {
    expect(element.onclick).toBeFalsy();
    if (type !== 'link') expect((element as HTMLButtonElement).disabled).toBeTruthy();
    else {
      expect((element as HTMLAnchorElement).href).toBeFalsy();
      expect((element as HTMLAnchorElement).target).toBeFalsy();
    }
  }
};

describe('test button component', () => {
  it('default button', test(defaultProps));
  it('based on different props', test(differentProps));
  it('link and href is provided', test(linkProps));
  it('disabled', test(disabledProps));
  it('disabled link', test(disabledLinkProps));
});
