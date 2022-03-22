import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { Canvas, MeshProps, useFrame } from '@react-three/fiber'
import { Vector3 } from 'three'

interface BoxProps extends MeshProps {
  size?: number
}

const Box = (props: BoxProps) => {
  const {size, ...others} = props
  const baseScale = new Vector3(1, 1, 1).multiplyScalar(size ?? 1)
  const clickedScale = new Vector3(1.5, 1.5, 1.5).multiplyScalar(size ?? 1)

  const ref = useRef<THREE.Mesh>(null!)
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  useFrame((state, delta) => (ref.current.rotation.x += 0.01))
  return (
    <mesh
      {...others}
      ref={ref}
      scale={clicked ? clickedScale : baseScale}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

const HomePage: React.FC = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[0, 0, 0]} size={2} />
    </Canvas>)
};

export default HomePage