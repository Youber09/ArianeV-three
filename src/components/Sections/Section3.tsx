import { useGSAP } from "@gsap/react"
import gsap from "gsap"


const Section3 = () => {

    useGSAP(() =>{

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: `.section3-text1`,
                pin: true,
                scrub: 1,
                start: `0% 80%`,
                end: `100% 20%`,
                // markers: true,
            },
        })

        tl.from(`.section3-text1`, {        
            translateX: `-200%`,
            duration: 2,
        })
        .from(`.section3-text1`, {
            duration: 8
        }).to(`.section3-text1`, {
            duration: 2,
            translateX: `-200%`
        })


    }, [])

  return (
    <section className="h-[200vh] flex flex-col relative justify-start items-center w-full section3 overflow-hidden z-5">
      
        <p className="Font text-[5vw]/[5vw] tracking-[-0.2vw] text-center z-5 section3-text1 h-full">ENVOYÉ POUR LA PREMIERE FOIS EN 1996</p>
        
    </section>
  )
}

export default Section3