/*
 * @Description: 未添加描述
 * @Date: 2021-05-08 15:56:47
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-08 18:06:28
 */

import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button, { ButtonProps } from '../components/button/button';
import '../styles/index.scss';
import generateNode from './generateNode';

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

const Primary = generateNode(
  {
    type: 'primary',
    children: 'Button',
    onClick: action('onClick'),
  },
  Template,
);

export { Primary };

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;
