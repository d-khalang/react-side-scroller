import { useState, useRef } from 'react'
import { Application } from '@pixi/react'


function App() {
  const parentRef = useRef(null);

  return (
    <div ref={parentRef}>
      <Application resizeTo={parentRef} />
      <pixiContainer x={100} y={100}>
      <pixiSprite anchor={{ x: 0.5, y: 0.5 }} texture={texture} />
      </pixiContainer>  
    </div>
  )
}

export default App
