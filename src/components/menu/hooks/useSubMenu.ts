/*
 * @Description: SubMenu hook
 * @Date: 2021-05-06 10:14:08
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-08 12:56:43
 */

import { Children, cloneElement, ReactNode, useContext, useState } from 'react';
import classNames from 'classnames';
import { SubMenuProps, SubMenuChildrenType } from '../SubMenu';
import MenuContext from './useMenuContext';

const handleContent = (children?: ReactNode, title?: string) => {
  const nodes = Children.map(children as SubMenuChildrenType, (child, index) => {
    if (child) {
      const childName = child?.type?.displayName ?? '';
      if (childName === 'MenuItem') {
        const node = cloneElement(child, {
          index: `${title}-${index}`,
          ...child.props,
        });
        return node;
      }
      throw Error('Error: SubMenu has a child which is not MenuItem');
    }
    return null;
  });
  return nodes;
};

const useSubMenu = (props: SubMenuProps) => {
  const { mode, activeIndex, defaultOpenIndex } = useContext(MenuContext);
  const children = handleContent(props.children, props.title);
  let isVisible = false;
  let isActive = false;
  Children.forEach(children, (child) => {
    if (child?.props.index === defaultOpenIndex) isVisible = true;
    if (child?.props.index === activeIndex) isActive = true;
  });
  const [visible, setVisible] = useState(isVisible);
  const isHorizontal = mode === 'horizontal';
  const boxClass = classNames('sp-sub-menu', 'sp-menu-item', props.className, {
    [`menu-item-${mode}`]: mode,
    'menu-item-active': isActive,
  });
  const ulClass = classNames('sub-menu-ul', {
    'sub-menu-vertical': mode === 'vertical',
  });

  let timer: NodeJS.Timeout;
  const onUlMouseEnter = isHorizontal
    ? (e: React.MouseEvent) => {
        e.stopPropagation();
        clearTimeout(timer);
        // setVisible(true);
        timer = setTimeout(() => {
          setVisible(true);
        }, 100);
      }
    : undefined;

  const onUlMouseLeave = isHorizontal
    ? (e: React.MouseEvent) => {
        e.stopPropagation();
        clearTimeout(timer);
        // setVisible(false);
        timer = setTimeout(() => {
          setVisible(false);
        }, 100);
      }
    : undefined;

  const onTitleClick = isHorizontal
    ? undefined
    : (e: React.MouseEvent) => {
        e.stopPropagation();
        setVisible(!visible);
        // setTimeout(() => {
        //   setVisible(!visible);
        // }, 300);
      };

  return {
    children,
    visible,
    boxClass,
    ulClass,
    onTitleClick,
    onUlHover: {
      onMouseEnter: onUlMouseEnter,
      onMouseLeave: onUlMouseLeave,
    },
  };
};

export default useSubMenu;
