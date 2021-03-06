/*
 * @Description: test menu
 * @Date: 2021-05-04 17:35:11
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-07 18:34:38
 */

import { render, fireEvent, waitFor } from '@testing-library/react';
import Menu, { MenuProps } from '../menu';
import { MenuItemProps } from '../menuItem';
import SubMenu from '../subMenu';

const onSelect = jest.fn();
const onClick = jest.fn();
const defaultProps: MenuProps = {
  mode: 'horizontal',
  className: 'default',
  defaultIndex: 'active',
  style: { backgroundColor: '#eaeaea' },
  onSelect,
};
const controlledProps: MenuProps = {
  ...defaultProps,
  className: 'controlled',
  activeIndex: 'style',
};
const verticalProps: MenuProps = {
  ...controlledProps,
  className: 'vertical',
  mode: 'vertical',
};
const defaultOpenProps: MenuProps = {
  ...verticalProps,
  className: 'defaultOpenIndex',
  defaultOpenIndex: 'subMenu-0',
};
const items: MenuItemProps[] = [
  { index: 'active' },
  { index: 'disabled', disabled: true },
  { index: 'onClick', onClick },
  { index: 'style', style: { fontSize: '2rem' } },
  { index: 'className', className: 'menuITem' },
];

const createStyleFile = () => {
  const cssFile = `
  .sub-menu-ul {
    display: none;
  }
  .sub-menu-ul.sub-menu-open {
    display: flex;
  }
  `;
  const style = document.createElement('style');
  style.innerHTML = cssFile;
  return style;
};

const test = (props: MenuProps) => async () => {
  const { mode, activeIndex, defaultIndex = 'active', className = '' } = props;
  const activeKey = activeIndex ?? defaultIndex;
  const wrapper = render(
    <Menu {...props}>
      {items.map((item) => {
        const { index } = item;
        return (
          <Menu.Item {...item} key={index}>
            {index}
          </Menu.Item>
        );
      })}
      <SubMenu title="subMenu">
        <Menu.Item>subMenuItem1</Menu.Item>
        <Menu.Item>subMenuItem2</Menu.Item>
      </SubMenu>
    </Menu>,
  );
  wrapper.container.append(createStyleFile());
  const menuElement = wrapper.getByTestId('test-menu');
  // test menu
  expect(menuElement).toBeInTheDocument();
  expect(menuElement).toHaveClass(className);
  expect(menuElement).toHaveClass(`menu-${mode}`);
  // test menuItem
  const activeElement = wrapper.getByText(activeKey);
  const disabledElement = wrapper.getByText('disabled');
  const onClickElement = wrapper.getByText('onClick');
  const subMenuElement = menuElement.getElementsByClassName('sp-sub-menu')[0];
  const subMenuItemElement = wrapper.getByText('subMenuItem1');
  if (className === 'default') {
    // put most menuItem tests here
    expect(menuElement.querySelectorAll(':scope>li').length).toEqual(5);
    expect(menuElement.querySelectorAll(':scope li').length).toEqual(7);
    expect(activeElement).toHaveClass('menu-item-active');
    fireEvent.click(disabledElement);
    expect(disabledElement).toHaveClass('menu-item-disabled');
    expect(disabledElement).not.toHaveClass('menu-item-active');
    expect(onSelect).not.toHaveBeenCalled();
    fireEvent.click(onClickElement);
    expect(onClick).toHaveBeenCalledWith('onClick');
    expect(onSelect).toHaveBeenCalledWith('onClick');
    expect(onClickElement).toHaveClass('menu-item-active');
    expect(subMenuItemElement).not.toBeVisible();
    fireEvent.mouseEnter(subMenuElement);
    await waitFor(() => {
      expect(subMenuItemElement).toBeVisible();
    });
    fireEvent.mouseLeave(subMenuElement);
    await waitFor(() => {
      expect(subMenuItemElement).not.toBeVisible();
    });
    fireEvent.click(subMenuItemElement);
    expect(onSelect).toHaveBeenCalledWith('subMenu-0');
  }
  if (className === 'controlled') {
    expect(activeElement).toHaveClass('menu-item-active');
  }
  if (className === 'vertical') {
    const subMenuTitleElement = wrapper.getByText('subMenu');
    fireEvent.click(subMenuTitleElement);
    await waitFor(() => {
      expect(subMenuItemElement).toBeVisible();
    });
    fireEvent.click(subMenuTitleElement);
    await waitFor(() => {
      expect(subMenuItemElement).not.toBeVisible();
    });
  }
  if (className === 'defaultOpenIndex') {
    expect(subMenuItemElement).toBeVisible();
  }
};

describe('test menu', () => {
  it('default menu and menuItem', test(defaultProps));
  it('controlled menu and menuItem', test(controlledProps));
  it('vertical menu and menuItem', test(verticalProps));
  it('default open subMenu', test(defaultOpenProps));
});
