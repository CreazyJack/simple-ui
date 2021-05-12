/*
 * @Description: upload story
 * @Date: 2021-05-11 14:13:09
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-12 14:11:56
 */

import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import Upload, { UploadProps } from '../components/Upload';
import '../styles/index.scss';

const Template: Story<UploadProps> = (args) => <Upload {...args}>点击上传</Upload>;

const DefaultUpload = Template.bind({});
DefaultUpload.args = {
  action: 'https://jsonplaceholder.typicode.com/posts',
  beforeUpload(file: File) {
    // if (Math.round(file.size / 1024) > 50) return false;
    // return true;
    // const newFile = new File([file], 'new_name.docx', { type: file.type });
    return Promise.resolve(file);
  },
  onProgress: action('progress'),
  onSuccess: action('success'),
  onError: action('error'),
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
