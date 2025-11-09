import { useGSAP } from "@gsap/react"
import gsap from "gsap"


const Section5 = () => {

    useGSAP(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: `.section5`,
                pin: true,
                scrub: 0.5,
                start: `0% top`,
                end: `500% top`,
                markers: true,
            },
        })

    }, [])

    

  return (
    <div className="h-[500vh]">
        <div className="section5 h-screen bg-black z-5">
            
        </div>
    </div>
  )
}

export default Section5