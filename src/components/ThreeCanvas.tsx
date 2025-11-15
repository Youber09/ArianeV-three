import { Canvas } from "@react-three/fiber"
import Earth from "./Earth"
import Camera from "./Camera"
import RandomBoxes from "./RandomBoxes"
import ThreeRocket from "./Canvas/ThreeRocket.js"
import { Float, OrbitControls, Text3D } from "@react-three/drei"
// import { Environment } from "@react-three/drei"

const RB = Math.PI / 180

const ThreeCanvas = () => {



  return (
    <div id="canvas-container" className="h-full fixed bottom-0 z-1 w-full ">

        <Canvas className="" camera={{ fov: 50, position: [0, 14, 6], rotation: [RB * -10, 0, 0] }}>
          

            <spotLight position={[0, 20, 10]} angle={10} penumbra={0} decay={0} intensity={Math.PI * 0.5} color={`skyblue`} />


            <spotLight position={[-20, 20, 10]} angle={10} penumbra={0} decay={0} intensity={Math.PI * 1} color={`pink`}  />

            <ambientLight intensity={0} />
            <Earth />
            <ThreeRocket />

            <Float floatIntensity={1} speed={0.7}>
              
              <RandomBoxes />
            </Float>
            
          <Camera />
        </Canvas>

      </div>
  )
}

export default ThreeCanvas