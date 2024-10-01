import { PerspectiveCamera, useGLTF } from '@react-three/drei'
import { useEffect } from 'react'
import { WebGLRenderer } from 'three'

export function ModelXS2(props) {
  const { nodes, materials } = useGLTF('/models/4CAM_optimize.glb') as any

  const renderer = new WebGLRenderer()

  // Append the renderer to the document body on mount
  useEffect(() => {
    document.body.appendChild(renderer.domElement)

    const handleContextLost = () => {
      renderer.setAnimationLoop(null)
    }

    const domElement = renderer.domElement
    domElement.addEventListener('webglcontextlost', handleContextLost)

    // Cleanup function to remove event listeners and renderer DOM element
    return () => {
      domElement.removeEventListener('webglcontextlost', handleContextLost)
      if (domElement.parentNode) {
        domElement.parentNode.removeChild(domElement) // Check if the parent node exists
      }
    }
  }, [renderer])

  return (
    <group {...props} dispose={null}>
      <PerspectiveCamera
        makeDefault={false}
        far={2269.285}
        near={0.1}
        fov={2578.31}
        position={[-127.2, -519.542, 1163.363]}
        rotation={[-0.095, 0.201, 0.004]}
        scale={[-2.392, 2.409, 1.063]}
      />
      <spotLight
        intensity={43333.277}
        angle={1.49}
        penumbra={1}
        decay={2}
        distance={6210.945}
        position={[730.144, 135.721, -106.036]}
        rotation={[-1.962, 1.356, 2.461]}
      />
      <PerspectiveCamera
        makeDefault={false}
        far={576.169}
        near={0.1}
        fov={2864.789}
        position={[-391.883, -345.483, 1019.515]}
        rotation={[0.074, 0.618, 0.008]}
        scale={[-1.836, 2.138, 1.502]}
      />
      <spotLight
        intensity={35677.781}
        angle={Math.PI / 4}
        penumbra={1}
        decay={2}
        distance={18410.609}
        position={[-389.093, 1065.723, 37.324]}
        rotation={[-1.548, -0.343, -1.564]}
      />
      <spotLight
        intensity={146235.594}
        angle={1.017}
        penumbra={1}
        decay={2}
        distance={45005.945}
        position={[344.319, 315.533, -1350.661]}
        rotation={[-2.935, 0.067, -3.123]}
      />
      <PerspectiveCamera
        makeDefault={false}
        far={1442.845}
        near={0.1}
        fov={1543.019}
        position={[-578.643, -429.502, 1666.512]}
        rotation={[-0.389, 0.327, 0.029]}
        scale={[-4.063, 4, 1.837]}
      />
      <PerspectiveCamera
        makeDefault={false}
        far={1000}
        near={0.1}
        fov={2864.789}
        position={[-24.474, -249.055, 2613.42]}
        rotation={[-0.239, 0.461, 0.002]}
        scale={[-2, 2.099, 1.339]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube4.geometry}
        material={materials.blinn8SG}
        position={[4.117, 8.26, 60.384]}
        rotation={[0, 0.068, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface106_polySurface70.geometry}
        material={materials.pasted__blinn2SG}
        rotation={[0, 0.068, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface70_polySurface107.geometry}
        material={materials.pasted__blinn1SG}
        rotation={[0, 0.068, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface58_polySurface93.geometry}
        material={materials.pasted__blinn5SG}
        rotation={[0, 0.068, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface76_polySurface69.geometry}
        material={materials.blinn3SG}
        rotation={[0, 0.068, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface69_polySurface75.geometry}
        material={materials.blinn6SG}
        rotation={[0, 0.068, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface58_polySurface91.geometry}
        material={materials.pasted__blinn4SG}
        rotation={[0, 0.068, 0]}
      />
      <PerspectiveCamera
        makeDefault={false}
        far={1000}
        near={0.1}
        fov={2578.31}
        position={[-323.086, -192.96, 1141.955]}
        rotation={[-0.288, 0.014, 0.001]}
        scale={[-2.414, 2.366, 1.109]}
      />
      <spotLight
        intensity={26595.701}
        angle={0.873}
        penumbra={1}
        decay={2}
        distance={11116.467}
        position={[-1058.528, 23.872, 500.537]}
        rotation={[-0.084, -1.135, -0.076]}
      />
      <spotLight
        intensity={103127.992}
        angle={0.873}
        penumbra={1}
        decay={2}
        distance={43105.422}
        position={[6.408, -3361.931, -48.931]}
        rotation={[1.579, -0.013, 2.117]}
      />
      <spotLight
        intensity={99963.289}
        angle={2.094}
        penumbra={1}
        decay={2}
        distance={7253.931}
        position={[-539.03, 272.858, -396.906]}
        rotation={[3.097, -0.655, -2.634]}
      />
    </group>
  )
}
