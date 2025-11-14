import { AmbientLight, Scene, SphereGeometry } from "three"
import { Edges, Environment, OrbitControls, RoundedBox, TransformControls } from "@react-three/drei"

const Boxes = ({ position, rotation, scale }: { position: number[], rotation: number[], scale: number }) => {
  return (
    <>
      <mesh position={position} rotation={rotation} scale={scale}>
        <sphereGeometry args={[1, 1, 1]} /> 
        <meshBasicMaterial transparent color={"black"} opacity={1} /> 
        <Edges color="white" />

        <RoundedBox
          args={[2.5, 2.5, 2.5]} 
          radius={0.3}            
          smoothness={8}          
          position={[0, 1.25, 0]}
          castShadow
          receiveShadow
        >

          
          <meshStandardMaterial
  color="black"
  emissive="black"
  emissiveIntensity={2}
  metalness={20}
  transparent
  opacity={1}
  roughness={0.3}
/>
        </RoundedBox>

        
      </mesh>
    </>
  )
}

export default Boxes