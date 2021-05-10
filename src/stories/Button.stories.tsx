/*
 * @Description: 未添加描述
 * @Date: 2021-05-08 15:56:47
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-10 15:37:31
 */

import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button, { ButtonProps } from '../components/button/button';
import '../styles/index.scss';

const Template: Story<ButtonProps> = (args) => <Button {...args}>{args.type}</Button>;

const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  onClick: action('onClick'),
  danger: false,
};

export { Primary };

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    type: {
      control: {
        type: 'radio',
        options: ['primary', 'link', 'default'],
      },
    },
    danger: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta;
