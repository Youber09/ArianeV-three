import { Canvas, useThree } from "@react-three/fiber"
import Rocket from "../public/Rocket.jsx"
import { AmbientLight, Scene } from "three"
import { Edges, Environment, Grid, OrbitControls, RoundedBox, TransformControls } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from "three"
import Boxes from "./components/Boxes.js"
import Earth from "./components/Earth.js"
import RandomBoxes from "./components/RandomBoxes.js"
import Camera from "./components/Camera.js"

const RB = Math.PI / 180


function App() {

  const rocketRef = useRef<THREE.Group>(null)


  return (
    <>
      <div className="-z-1 bg-radial from-white to-black/60 fixed bottom-0 h-screen w-screen"></div>
        <div id="canvas-container" className="h-full fixed bottom-0 z-1 w-full ">

          <Canvas className="" camera={{fov: 50, position: [0,14,6],rotation: [RB * -10,0,0]}}>
            
            
            <spotLight position={[0, 20, 10]} angle={1} penumbra={0} decay={0} intensity={Math.PI * 1} />



            <Rocket ref={rocketRef} position={[0,10,0]} rotation={[0,0,0]}  scale={0.5} />

            <Earth />

            <Camera />
            <RandomBoxes />

            
          </Canvas>
          
        </div>


      <section className=" h-screen flex flex-col relative justify-center items-center w-full">
        <h1 className="Font text-[20vw] absolute tracking-tighter z-0 top-[10%]">ARIANE V</h1>
          
      </section>

      <section className="h-screen z-5 section2">
        
      </section>

      
      
    </>
  )
}

export default App

