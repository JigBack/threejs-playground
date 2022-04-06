import React, { ChangeEventHandler, useState } from 'react'
import { Canvas, MeshProps } from '@react-three/fiber'
import SimplexNoise from 'simplex-noise';
import { Vector3 } from 'three';
import { Box, RangeInput, Text, TextInput } from 'grommet';

interface TerrainCubeProps extends MeshProps {
  position: Vector3
}

const TerrainCube = (props: TerrainCubeProps) => {
  const { position } = props

  const [hovered, hover] = useState(false)

  const getColor = (height: number): string => {
    if (height === 0) {
      return 'lightslategrey'
    }
    if (height <= 2) {
      return 'saddlebrown'
    }
    return 'seagreen'
  }

  return (
    <mesh
      position={position}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'salmon' : getColor(position.z)} />
    </mesh>
  )
}

const generateTerrainData = (seed: string, verticalScale: number, roughness: number, sideLength: number): Array<Vector3> => {
  const simplex = new SimplexNoise(seed)

  const gridData: Array<Vector3> = []
  for (let x = 0; x < sideLength; x++) {
    for (let y = 0; y < sideLength; y++) {
      const noiseValue = (simplex.noise2D(x * roughness, y * roughness) + 1) / 2
      const zMax = Math.floor(noiseValue * verticalScale)
      for (let z = 0; z <= zMax; z++) {
        gridData.push(new Vector3(x - (sideLength / 2), y - (sideLength / 2), z))
      }
    }
  }

  return gridData
}

const VoxelTerrainPage = () => {
  const [seed, setSeed] = React.useState('seed');
  const handleSeedChange: ChangeEventHandler<HTMLInputElement> = (event) => setSeed(event.target.value);

  const [verticalScale, setVerticalScale] = React.useState(5);
  const handleVerticalScaleChange: ChangeEventHandler<HTMLInputElement> = (event) => setVerticalScale(parseInt(event.target.value));

  const [sideLength, setSideLength] = React.useState(30);
  const handleSideLengthChange: ChangeEventHandler<HTMLInputElement> = (event) => setSideLength(parseInt(event.target.value));

  const [roughness, setRoughness] = React.useState(0.1);
  const handleRoughnessChange: ChangeEventHandler<HTMLInputElement> = (event) => setRoughness(parseFloat(event.target.value));

  const terrainData = generateTerrainData(
    seed,
    verticalScale,
    roughness,
    sideLength
  )

  return (
    <React.Fragment>
      <Canvas camera={{ position: [0, -22, 13] }}>
        <ambientLight />
        <pointLight intensity={0.7} position={[10, 10, 10]} />
        {
          terrainData.map((position) => <TerrainCube key={`${position.x}-${position.y}-${position.z}`} position={position} />)
        }
      </Canvas>
      <Box className='control-box' width={'medium'}>
        <Box direction='row'>
          <Text>Roughness</Text>
          <RangeInput
            min={0}
            max={0.3}
            step={0.01}
            value={roughness}
            onChange={handleRoughnessChange}
          />
        </Box>
        <Box direction='row'>
          <Text>Size</Text>
          <RangeInput
            min={1}
            max={40}
            step={1}
            value={sideLength}
            onChange={handleSideLengthChange}
          />
        </Box>
        <Box direction='row'>
          <Text>Height</Text>
          <RangeInput
            min={1}
            max={10}
            step={1}
            value={verticalScale}
            onChange={handleVerticalScaleChange}
          />
        </Box>
        <Box direction='row'>
          <Text>Seed</Text>
          <TextInput
            value={seed}
            onChange={handleSeedChange}
          />
        </Box>
      </Box>
    </React.Fragment >
  )
};

export default VoxelTerrainPage