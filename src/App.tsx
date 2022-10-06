import { Float, OrbitControls } from '@react-three/drei'
import { Canvas, extend, useLoader } from '@react-three/fiber'
import React, { Suspense, useEffect, useRef } from 'react'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import CustomFont from './assets/fonts/helvetiker_bold.typeface.json'
import './App.css'
import CustomTexture from './assets/images/matcap1.jpeg'
import CustomTexture2 from './assets/images/matcap2.jpeg'
import * as THREE from 'three'
import { Mesh } from 'three'

extend({ TextGeometry })

function App() {

  const textFont = new FontLoader().parse(CustomFont)
  const [matCapTexture, matCapTexture2] = useLoader(THREE.TextureLoader, [CustomTexture, CustomTexture2])
  const textMesh = useRef<Mesh>()
  return (
   <Canvas
   id='webgl'
   camera={{
    position: [0, 2, 5],
   }}
   >
    <Suspense fallback={<div style={{ color: 'white' }}>Loading...please wait</div>}>
      <OrbitControls />
       {/* <mesh>
         <boxBufferGeometry args={[1, 1, 1]} />
         <meshBasicMaterial  color={'white'}/>
       </mesh> */}
       
       <mesh position={[2, 0, 0]} scale={0.5} rotation={[0, Math.PI , 0]}>
        {/* @ts-ignore */}
        <textGeometry  args={['Tech Bros.', {font: textFont, size: 1, height: 0.2}]} />
        <meshMatcapMaterial matcap={matCapTexture2}  attach={'material'}  />
       </mesh>
      {
        Array.apply(null, new Array(200)).map((_, index) => {
    
          return (
            // <Float>
          <Float>
              <mesh 
            scale={Math.random()}
            position={[
              (Math.random() - 0.5) * 12,
              (Math.random() - 0.5) * 12,
              (Math.random() - 0.5) * 12
            ]}
            rotation={[
              Math.random() * Math.PI,
              Math.random() * Math.PI,
              Math.random() * Math.PI
            ]}
            key={index} >
              <torusGeometry args={[0.3, 0.2, 20, 45]} />
              <meshMatcapMaterial matcap={matCapTexture}  attach={'material'}  />
            </mesh>
          </Float>
          )
        })
      }
       {
        Array.apply(null, new Array(200)).map((_, index) => {
    
          return (
            <Float>
              <mesh 
            scale={Math.random()}
            position={[
              (Math.random() - 0.5) * 12,
              (Math.random() - 0.5) * 12,
              (Math.random() - 0.5) * 12
            ]}
            rotation={[
              Math.random() * Math.PI,
              Math.random() * Math.PI,
              Math.random() * Math.PI
            ]}
            key={index} >
              <boxGeometry args={[0.5, 0.5, 0.5]} />
              <meshNormalMaterial />
            </mesh>
            </Float>
          )
        })
      }
    </Suspense>
   </Canvas>
  )
}

export default React.memo(App)
