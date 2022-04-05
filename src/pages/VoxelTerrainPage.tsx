import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { Canvas, MeshProps, useFrame } from '@react-three/fiber'
import SimplexNoise from 'simplex-noise';
import { Quaternion, Vector3 } from 'three';

interface TerrainCubeProps extends MeshProps {
  color?: number
}

const TerrainCube = (props: TerrainCubeProps) => {
  const { color, ...others } = props

  const ref = useRef<THREE.Mesh>(null!)
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)

  return (
    <mesh
      {...others}
      ref={ref}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'hotpink'} opacity={hovered ? 0.5 : 1} />
    </mesh>
  )
}

const generateTerrainData = (seed: string, verticalScale: number, xLength: number, yLength: number): Array<Vector3> => {
  const simplex = new SimplexNoise(seed)

  const gridData: Array<Vector3> = []
  for (let x = 0; x < xLength; x++) {
    for (let y = 0; y < yLength; y++) {
      const noiseValue = simplex.noise2D(x, y)
      const zMax = Math.max(Math.floor(noiseValue * verticalScale), 0)
      for (let z = 0; z <= zMax; z++) {
        gridData.push(new Vector3(x - (xLength / 2), y - (yLength / 2), z))
      }
    }
  }

  return gridData
}

const VoxelTerrainPage = () => {
  const seed = 'seed'
  const verticalScale = 5
  const xLength = 25
  const yLength = 25
  const cameraRadius = 15

  const terrainData = generateTerrainData(
    seed,
    verticalScale,
    xLength,
    yLength
  )

  const Camera = () => {
    useFrame(({ clock, camera }) => {
      camera.lookAt(new Vector3(0, 0, 15))
      camera.position.x = Math.cos(clock.getElapsedTime()) * cameraRadius
      camera.position.y = Math.sin(clock.getElapsedTime()) * cameraRadius
      // camera.position.applyQuaternion(new Quaternion().setFromAxisAngle(new Vector3(0, 0, 1), clock.getElapsedTime() / 10000))
    })
    return null
  }

  return (
    <Canvas camera={{position: [0, cameraRadius, 15]}}>
      <Camera />
      <ambientLight />
      <pointLight position={[10, 10, 100]} />
      {
        terrainData.map((position) => <TerrainCube key={`${position.x}-${position.y}-${position.z}`} position={position} />)
      }
    </Canvas>
  )
};

export default VoxelTerrainPage