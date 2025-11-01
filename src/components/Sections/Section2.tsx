import { useGSAP } from "@gsap/react"
import gsap from "gsap"


const Section2 = () => {

    useGSAP(() => {
    
        
        gsap.from(`.section2-text1`, {
            scrollTrigger: {
                markers: true,
                scrub: 1,
                trigger: `.section2`,
                end: `top top`,
                start: `top 80%`
            },
            duration: 2,
            translateX: `-130%`,
            ease: `back.out`
        })
        gsap.from(`.section2-text2`, {
            scrollTrigger: {
                markers: true,
                scrub: 1,
                trigger: `.section2`,
                end: `top top`,
                start: `top 80%`
            },
            duration: 2,
            translateX: `130%`,
            ease: `back.out`
        })

    
      }, [])

    return (
        <section className="h-screen z-5 section2 flex flex-col justify-start items-center p-[2%] pt-[2%] overflow-hidden">
            <p className="Font text-[10vw]/[10vw] tracking-[-0.5vw] text-center section2-text1">UNE CREATION</p>
            <p className="Font text-[12vw]/[10vw] tracking-[-0.5vw] text-center section2-text2 ">HISTORIQUE</p>
        </section>
    )
}

export default Section2