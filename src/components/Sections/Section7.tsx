import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"


const Section7 = ({text}: {text:string}) => {

    const ref = useRef<HTMLDivElement | null>(null)

    useGSAP(() => {

        gsap.from(ref.current,{
            scrollTrigger: {
                trigger: ref.current,
                scrub: 0.2,
                end: `top 30%`,
                
            },
            translateX: `-100%`,
            opacity: 0,
            ease: `sine`
        })

    }, [])

  return (
    <div className="h-svh bg-white relative overflow-hidden mt-[-1%] flex justify-center items-center section7">
        <div className="pinnedText2 text-black text-[4vw]/[6vw] Font z-5 text-center p-[5%] max-[500px]:text-[8vw]/[8vw] overflow-hidden" ref={ref}>{text}</div>
    </div>
  )
}

export default Section7