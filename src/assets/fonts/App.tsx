import { OrbitControls } from '@react-three/drei'
import { Canvas, extend } from '@react-three/fiber'
import { Suspense, useState } from 'react'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import './App.css'

extend({ TextGeometry })

function App() {
  const [count, setCount] = useState(0)

  return (
   <Canvas
   id='webgl'
   camera={{
    position: [0, 4, 4]
   }}
   >
    <Suspense fallback={null}>
      <OrbitControls />
       <mesh>
         <boxBufferGeometry args={[1, 1, 1]} />
         <meshBasicMaterial  color={'white'}/>
       </mesh>
    </Suspense>
   </Canvas>
  )
}

export default App
