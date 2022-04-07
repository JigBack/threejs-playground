import React, { useRef } from 'react'
import { Canvas, MeshProps, useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'

const Sphere = (props: MeshProps) => {
  const { position } = props
  const ref = useRef()

  useFrame(({ clock }) => {
    const mesh = ref.current as any
    mesh.rotation.y = 0.5 * clock.getElapsedTime()
  })

  const [normalMap] = useTexture([
    'normal-map.jpg'
  ])

  return (
    <mesh position={position} ref={ref}>
      <sphereBufferGeometry args={[0.5, 64, 64]} />
      <meshStandardMaterial
        color={0x292929}
        metalness={0.7}
        normalMap={normalMap}
        roughness={0.2}
      />
    </mesh>
  )
}

const OrbitControlPage = () => {
  return (
    <Canvas camera={{ position: [0, 0, 2] }}>
      <color attach="background" args={[0.1, 0.1, 0.1]} />
      <ambientLight />
      <pointLight intensity={1} position={[2, 3, 4]} />
      <Sphere position={[0, 0, 0]} />
    </Canvas>
  )
};

export default OrbitControlPage