/*
 * @Description: upload story
 * @Date: 2021-05-11 14:13:09
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-11 15:59:59
 */

import { Story, Meta } from '@storybook/react';
import Upload, { UploadProps } from '../components/upload/upload';
import '../styles/index.scss';

const Template: Story<UploadProps> = (args) => <Upload {...args} />;

const DefaultUpload = Template.bind({});
DefaultUpload.args = {
  label: '点击上传',
};

export { DefaultUpload };

const model: Meta = {
  title: 'Example/Upload',
  component: Upload,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default model;
