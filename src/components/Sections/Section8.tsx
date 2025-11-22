import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"


const Section8 = () => {


    useGSAP(() =>{

        const split = new SplitText(`.section8-text`, {type: "words"})
        const words = split.words

        gsap.from(words, {
            scrollTrigger: {
                trigger: `.section8-text`,
                scrub: 2,
                // markers: true,
                end: `top 50%`,
                start: `top bottom`
            },
            opacity: 0,
            translateY: `-100%`,
            ease: `back.in`,
            stagger: 0.1
        })

    }, [])


  return (
    <div className="h-svh bg-white relative overflow-hidden mt-[-1%] flex justify-center items-center section8">
        <div className="pinnedText2 text-black text-[7vw]/[7vw] Font z-0 text-center p-[5%] max-[500px]:text-[12vw]/[12vw] overflow-hidden section8-text">LE BUG INFORMATIQUE LE PLUS COUTEUX DE L'HISTOIRE.</div>
    </div>
  )
}

export default Section8