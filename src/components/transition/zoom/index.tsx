/*
 * @Description: 未添加描述
 * @Date: 2021-05-08 11:06:22
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-11 16:21:22
 */

import { FC } from 'react';
import { CSSTransition } from 'react-transition-group';

interface ZoomTransitionProps {
  active: boolean;
  direction?: 'top' | 'right' | 'bottom' | 'left';
  timeout?: number;
  unmountOnExit?: boolean;
  wrapper?: boolean;
}

const ZoomTransition: FC<ZoomTransitionProps> = (props) => {
  const { children, direction, active, unmountOnExit, timeout, wrapper } = props;
  return (
    <CSSTransition
      in={active}
      timeout={timeout ?? 300}
      classNames={`zoom-in-${direction ?? 'top'}`}
      unmountOnExit={unmountOnExit ?? true}
    >
      {wrapper ? <div>{children}</div> : children}
    </CSSTransition>
  );
};

export default ZoomTransition;
