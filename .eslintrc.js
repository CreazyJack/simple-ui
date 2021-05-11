/*
 * @Description: eslint config
 * @Date: 2021-05-11 14:31:33
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-11 16:08:04
 */
module.exports = {
  extends: [
    'eslint-config-ali/typescript/react',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  rules: {
    'react/prop-types': 0,
  },
};
