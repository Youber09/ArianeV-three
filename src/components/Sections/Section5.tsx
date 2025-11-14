import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import PlaceHolder from "./PlaceHolder"
import { SplitText } from "gsap/all"
import Eye from "../svgs/Eye"


const Section5 = () => {

    useGSAP(() => {

        const split1 = new SplitText(`.section5-text1`, { type: "chars" })
        const chars1 = split1.chars

        gsap.from(chars1, {
            duration: 0.1,
            ease: `back.out`,
            scrollTrigger: {
                trigger: `.section5-text1`,
                start: `top 50%`,
                // toggleActions: ``
            },
            translateY: `300%`,
            stagger: 0.04
        })

        gsap.from(`.section5-img1`, {
            duration: 1,
            opacity: 0,
            translateY: `100%`,
            scrollTrigger: {
                trigger: `.section5-img1-1`,
                markers: true,
                start: `-100% 50%`,
                // toggleActions: `start`,
                end: `50% top`
            },
            ease: `sine.out`
        })

    }, [])



    return (
        <div className="h-[500vh] bg-black section5 flex flex-col items-center overflow-hidden">
            <PlaceHolder />
            <div className="text-white text-[5vw]/[5vw] Font z-5 text-center  flex flex-col justify-center items-center max-[1000px]:text-[8.4vw]/[8.4vw] p-[5%]">
                <p className="section5-text1 overflow-hidden">UN INCIDENT EST<br />MALHEUREUSEMENT ARRIVÉ</p>
                <div className="relative mt-[5%] section5-img1">
                    <img className="size-[40vw] max-[1000px]:size-[80vw] object-cover z-1 rounded-[1vw] section5-img1-1 relative " src="https://miro.medium.com/v2/resize:fit:1400/1*psxlqpwJPPhY_xkJp8r_PA.png" alt="" />
                </div>
                <a href="https://www.youtube.com/watch?v=c9Hf4qTxdxs" target="_blank" className="z-5 text-[2vw] bg-white rounded-[0.5vw] w-[30vw] p-[1%] py-[0%] text-black flex justify-around items-center mt-[5%] transition-all hover:scale-101 cursor-pointer group">REGARDER LA VIDEO <Eye /></a>
            </div>

            <div className="p-[5%] mt-[50vh]">
                <p className="text-white Font text-[5vw]/[5vw] text-center section5-text-2">
                    LES EMPLOYÉS DE L'ESA ONT REPRIS UN BOUT DE CODE DE ARIANE IV
                </p>
            </div>
        </div>
    )
}

export default Section5