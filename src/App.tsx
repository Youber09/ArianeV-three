import Section2 from "./components/Sections/Section2.js"
import Section1 from "./components/Sections/Section1.js"
import Section3 from "./components/Sections/Section3.js"
import ThreeCanvas from "./components/ThreeCanvas.js"
import Section4 from "./components/Sections/Section4.js"
import PlaceHolder from "./components/Sections/PlaceHolder.js"
import Section5 from "./components/Sections/Section5.js"

function App() {



  return (
    <>
      <div className="-z-1 bg-radial from-black/20 to-white-500 fixed bottom-0 h-screen w-screen"></div>
      
      <ThreeCanvas />

      <Section1 />

      <Section2 />

      <Section3 />

      <Section4 />

      {/* <PlaceHolder bg="bg-black" /> */}

      <Section5 />

    </>
  )
}

export default App

