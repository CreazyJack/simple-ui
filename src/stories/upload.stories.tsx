/*
 * @Description: upload story
 * @Date: 2021-05-11 14:13:09
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-11 14:16:35
 */

import { Story, Meta } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import Upload, { UploadProps } from '../components/upload/upload';
import '../styles/index.scss';

const Template: Story<UploadProps> = (args) => <Upload {...args} />;

const DefaultUpload = Template.bind({});
DefaultUpload.args = {
  label: '点击上传',
};

export { DefaultUpload };

export default {
  title: 'Example/Upload',
  component: Upload,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;
