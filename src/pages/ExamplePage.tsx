import * as THREE from 'three'
import React, { ChangeEventHandler, useRef, useState } from 'react'
import { Canvas, MeshProps, useFrame } from '@react-three/fiber'
import { Vector3 } from 'three'
import { RangeInput } from 'grommet'

interface BoxProps extends MeshProps {
  size?: number
}

const Box = (props: BoxProps) => {
  const { size, ...others } = props
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

const ExamplePage = () => {
  const [scale, setScale] = React.useState(2);
  const [strech, setStrech] = React.useState(0.1);
  const resolution = 100;

  const handleScaleChange: ChangeEventHandler<HTMLInputElement> = (event) => setScale(parseFloat(event.target.value));
  const handleStrechChange: ChangeEventHandler<HTMLInputElement> = (event) => setStrech(parseFloat(event.target.value))

  const getSize = (index: number) => {
    return (1 - (Math.abs(index - resolution) / resolution)) * scale
  }

  const boxPositions: Vector3[] = []

  for (let i = -resolution; i < resolution; i++) {
    boxPositions.push(new Vector3(i * strech, 0, 0))
  }

  return (
    <React.Fragment>
      <RangeInput
        min={0}
        max={4}
        step={0.01}
        value={scale}
        onChange={handleScaleChange}
      />
      <RangeInput
        min={0}
        max={0.2}
        step={0.001}
        value={strech}
        onChange={handleStrechChange}
      />
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {
          boxPositions.map((position, index) => <Box position={position} size={getSize(index)} />)
        }
      </Canvas>
    </React.Fragment>
  )
};

export default ExamplePage