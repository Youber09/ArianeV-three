import { useTexture } from "@react-three/drei"


const RB = Math.PI / 180


const Earth = () => {
    const texture = useTexture("../../earth.jpg")
    const imp = useTexture("../../earth_normal_map.jpg")

  return (
    <>
        <mesh position={[0,0,0]} rotation={[RB * -40 ,RB * 10,0]} scale={10} castShadow>
            <sphereGeometry args={[1, 64, 64]} /> {/* radius, widthSeg, heightSeg */}
            <meshStandardMaterial map={texture} normalMap={imp}
            roughness={1}
            normalScale={[2, 2]}  />
        </mesh>
    </>
  )
}

export default Earth