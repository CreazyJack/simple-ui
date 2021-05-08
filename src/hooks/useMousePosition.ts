/*
 * @Description: mouse position listener
 * @Date: 2021-04-27 09:59:08
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-04-30 16:53:36
 */

import { useEffect, useState } from 'react';

const useMousePosition = () => {
  const [positions, setPositions] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePositions = (e: MouseEvent) => setPositions({ x: e.clientX, y: e.clientY });
    // add click listener
    document.addEventListener('click', updatePositions);
    // clear click listener
    return () => document.removeEventListener('click', updatePositions);
  }, []);

  return positions;
};

export default useMousePosition;
