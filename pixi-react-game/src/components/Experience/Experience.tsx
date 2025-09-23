import { Stage } from '@pixi/react';
import { useState, useCallback, useEffect } from 'react';
import { calculateCanvasSize } from '../../helpers/common';
import { MainContainer } from './MainContainer/MainContainer';

export const Experience = () => {
    const [canvasSize, setCanvasSize] = useState(calculateCanvasSize)
    
    const updateCanvasSize = useCallback(() => {
        setCanvasSize(calculateCanvasSize())
    }, [])
    
    useEffect(() => {
        window.addEventListener('resize', updateCanvasSize)
        return () => window.removeEventListener('resize', updateCanvasSize)
    }, [updateCanvasSize])

  return (
  <Stage width={canvasSize.width} height={canvasSize.height} >
    {/* Add your PIXI components here */}
    <MainContainer canvasSize={canvasSize}>
      {/* Other game components can go here */}
    </MainContainer>
  </Stage>
  );
}