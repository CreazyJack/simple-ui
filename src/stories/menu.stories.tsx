/*
 * @Description: menu story
 * @Date: 2021-05-10 14:19:40
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-12 14:38:39
 */

import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Menu, { MenuProps } from '../components/Menu/Menu';
import SubMenu from '../components/Menu/SubMenu';
import '../styles/index.scss';

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

const model: Meta = {
  title: 'Example/Menu',
  component: Menu,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default model;
