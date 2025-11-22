import { useGSAP } from "@gsap/react"
import gsap from "gsap"


const Section6 = () => {

    useGSAP(() => {

        gsap.to(`.openingBlock2`,{
            scrollTrigger: {
                trigger: `.openingBlock2`,
                // markers: true,
                start: `top 40%`,
                end: `100% top`,
                scrub: 0.5,
                pin: true,
            },
            scale: 18
        })

        gsap.to(`.pinnedText2`,{
            scrollTrigger: {
                trigger: `.pinnedText2`,
                // markers: true,
                start: `top 40%`,
                end: `30% top`,
                pin: true,
            },
        })

    }, [])

    


  return (
    <div className="h-[150svh] bg-black relative overflow-hidden mt-[-1%] flex justify-center section6">
        <div className="absolute bg-white h-[10vh] w-[10vw] rounded-full left-[50%] translate-x-[-50%] top-[10%] openingBlock2 overflow-hidden z-0"></div>
        <div className="pinnedText2 text-black text-[3vw]/[3vw] Font z-5 text-center max-[500px]:text-[6vw]/[6vw] px-[5%]">UNE EMBARRASSANTE SITUATION POUR L'EQUIPE ESA.</div>
    </div>
  )
}

export default Section6