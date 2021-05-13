import { FC } from 'react';
interface ZoomTransitionProps {
    active: boolean;
    direction?: 'top' | 'right' | 'bottom' | 'left';
    timeout?: number;
    unmountOnExit?: boolean;
    wrapper?: boolean;
}
declare const ZoomTransition: FC<ZoomTransitionProps>;
export default ZoomTransition;
