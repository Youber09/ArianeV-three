import { AmbientLight, Scene } from "three"
import { Edges, Environment, OrbitControls, RoundedBox, TransformControls } from "@react-three/drei"

const Boxes = ({position, rotation, scale}: {position: number[], rotation: number[], scale: number}) => {
  return (
    <>
        <mesh position={position} rotation={rotation} scale={scale}>
                      <boxGeometry args={[1, 1, 1]}/> {/* width, height, depth */}
                      <meshBasicMaterial transparent color={"black"} opacity={0.9} /> {/* invisible faces */}
                      <Edges color="white" />
        
                      <RoundedBox args={[1, 1, 1]} scale={1.2} radius={0.1} smoothness={4}>
                        {/* Transparent shell */}
                        <meshStandardMaterial
                          color="white"
                          transparent
                          opacity={0.2}
                        />
                        {/* Visible edges */}
                        <Edges color="white" />
                      </RoundedBox>
                    </mesh>
    </>
  )
}

export default Boxes