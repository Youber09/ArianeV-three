import { useGSAP } from "@gsap/react"
import gsap from "gsap"


const Section4 = () => {


    useGSAP(() =>{

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: `.section4-text1`,
                pin: true,
                scrub: 0.5,
                start: `0% 20%`,
                end: `100% 10%`,
                // markers: true,
            },
        })

        tl.to(`.section4-text1`, {
            translateX: `-140%`
        })

        


    }, [])


  return (
    <section className="h-[200vh] flex flex-col relative justify-start items-center w-full section4 overflow-hidden ">
      
        <p className="text-black Font text-[20vw] tracking-[-0.8vw] z-0 absolute w-[315vw] left-[100vw] section4-text1 h-full drop-shadow-black">8 MILLIARDS DOLLARS</p>

    </section>
  )
}

export default Section4