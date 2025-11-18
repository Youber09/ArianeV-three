import { useTexture } from "@react-three/drei"


const Floor = () => {

    const texture = useTexture("../../public/floorTexture.jpg")
    const imp = useTexture("../../public/marsNormalMap.jpg")

    console.log(texture, imp)

  return (
    <>
        <mesh position={[0,150,50]} scale={2}>
            <boxGeometry args={[5,0.1,5]} />
            <meshStandardMaterial map={texture} normalMap={imp} metalness={4} roughness={1} />
            {/* <spotLight angle={10} penumbra={0} decay={0} intensity={Math.PI * 0.5} color={`skyblue`} /> */}
        </mesh>
    </>
  )
}

export default Floor