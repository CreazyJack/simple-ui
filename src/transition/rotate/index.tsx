/*
 * @Description: rotate transition
 * @Date: 2021-05-08 12:00:53
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-08 14:25:43
 */

import { FC } from 'react';
import { CSSTransition } from 'react-transition-group';

type RotateTransitionProps = {
  active: boolean;
  timeout?: number;
  wrapper?: boolean;
};

const RotateTransition: FC<RotateTransitionProps> = (props) => {
  const { children, active, timeout, wrapper } = props;

  return (
    <CSSTransition in={active} timeout={timeout ?? 300} classNames="rotate-transition">
      {wrapper ? <div>{children}</div> : children}
    </CSSTransition>
  );
};

export default RotateTransition;
