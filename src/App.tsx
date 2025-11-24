import Section2 from "./components/Sections/Section2.js"
import Section1 from "./components/Sections/Section1.js"
import Section3 from "./components/Sections/Section3.js"
import ThreeCanvas from "./components/ThreeCanvas.js"
import Section4 from "./components/Sections/Section4.js"
import Section5 from "./components/Sections/Section5.js"
import Section6 from "./components/Sections/Section6.js"
import Section7 from "./components/Sections/Section7.js"
import Section8 from "./components/Sections/Section8.js"
import Footer from "./components/Sections/Footer.js"

function App() {



  return (
    <>
      <div className="-z-1 bg-white fixed bottom-0 h-screen w-screen"></div>
      
      <ThreeCanvas />

      <Section1 />

      <Section2 />

      <Section3 />

      <Section4 />

      {/* <PlaceHolder bg="bg-black" /> */}

      <Section5 />

      <div className="sectionObserver">

        <Section6 />

        <Section7 text={`SI ILS AVAIENT TESTÉ, CONFIRMÉ Y AURA PAS DE PERTE`} />

        <Section7 text="LEUR MANQUE DE PRINCIPES SIMPLES, C'EST SOIT ON RECYCLER BIEN DU CODE, SOIT ON LE RECYCLE PAS DU TOUT" />

        <Section7 text="MAIS CETTE GAFFE A QUAND MEME CRÉE QUELQUE CHOSE DE MÉMORABLE" />

        <Section8 />

        

      </div>

      <Footer />

      

    </>
  )
}

export default App

