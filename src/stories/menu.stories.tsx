/*
 * @Description: 未添加描述
 * @Date: 2021-05-10 14:19:40
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-10 14:44:56
 */

import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Menu, { MenuProps } from '../components/menu/menu';
import '../styles/index.scss';
import SubMenu from '../components/menu/subMenu';

const Template: Story<MenuProps> = (args) => <Menu {...args} />;

const Horizontal = Template.bind({});
Horizontal.args = {
  mode: 'horizontal',
  children: (
    <SubMenu title="test">
      <Menu.Item onClick={action('onClick')}>test1</Menu.Item>
    </SubMenu>
  ),
};

export { Horizontal };

export default {
  title: 'Example/Menu',
  component: Menu,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;
