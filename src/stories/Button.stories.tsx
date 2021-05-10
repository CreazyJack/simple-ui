/*
 * @Description: 未添加描述
 * @Date: 2021-05-08 15:56:47
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-10 15:53:31
 */

import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button, { ButtonProps } from '../components/button/button';
import '../styles/index.scss';

const Template: Story<ButtonProps> = (args) => <Button {...args}>{args.type || 'null'}</Button>;

const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  onClick: action('onClick'),
  danger: false,
};

const 不同大小的按钮: React.FC = () => (
  <>
    <Button size="small">small</Button>
    <Button size="middle">middle</Button>
    <Button size="large">large</Button>
  </>
);

export { Primary, 不同大小的按钮 };

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {},
} as Meta;
