/*
 * @Description: 未添加描述
 * @Date: 2021-05-08 17:59:32
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-08 18:04:16
 */

import { Story } from '@storybook/react';
import '../styles/index.scss';

type FnType = Story<Record<string, unknown>>;

const generateNode = (props: Record<string, unknown>, fn: FnType) => {
  const node = fn.bind({});
  node.args = props;
  return node;
};

export default generateNode;
