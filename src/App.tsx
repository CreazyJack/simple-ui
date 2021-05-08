/*
 * @Description: App
 * @Date: 2021-04-26 20:31:53
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-08 14:14:57
 */
import { FC } from 'react';
import Menu from './components/menu/menu';
import MenuItem from './components/menu/menuItem';
import SubMenu from './components/menu/subMenu';
import useInput from './hooks/useInput';

const App: FC = () => {
  const [value, onChange] = useInput();

  return (
    <div>
      <input value={value} onChange={onChange()} style={{ display: 'none' }} />
      <div>
        <Menu defaultIndex="1" mode="vertical">
          <Menu.Item>subMenu1subMenu1subMenu1subMenu1</Menu.Item>
          <SubMenu title="subMenu" className="3313123">
            <MenuItem>subMenu1subMenu1subMenu1subMenu1</MenuItem>
            <MenuItem>subMenu2</MenuItem>
          </SubMenu>
          <Menu.Item>
            <span>问题真多</span>
          </Menu.Item>
          <Menu.Item disabled>3</Menu.Item>
        </Menu>
      </div>
      <div>
        <Menu defaultIndex="1" mode="horizontal">
          <Menu.Item>subMenu1subMenu1subMenu1subMenu1</Menu.Item>
          <SubMenu title="subMenu" className="3313123">
            <MenuItem>subMenu1subMenu1subMenu1subMenu1</MenuItem>
            <MenuItem>subMenu2</MenuItem>
          </SubMenu>
          <Menu.Item>
            <span>问题真多</span>
          </Menu.Item>
          <Menu.Item disabled>3</Menu.Item>
        </Menu>
      </div>
    </div>
  );
};

export default App;
