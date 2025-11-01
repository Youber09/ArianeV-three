import { useThree } from "@react-three/fiber"
import gsap from "gsap"
import {useGSAP} from "@gsap/react"


const RB = Math.PI / 180

const Camera = () => {

  const {camera} = useThree()

  useGSAP(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        markers: true,
        scrub: true,
        trigger: `.section2`,
        end: `top top`
      }
    })

    const tl2 = gsap.timeline({
      scrollTrigger: {
        markers: true,
        scrub: true,
        trigger: `.section2`,
        end: `top top`
      }
    })

    tl.to(camera.position, {
      x: 0,
      y: 40,
      z: 40,
      duration: 1
    })

    tl2.to(camera.rotation, {
      x: RB * -40,
      y: 0,
      z: 0,
      duration: 1,
      ease: `power1.in`
    })

  }, [])

  

    
    console.log(camera.position)

  return null
}

export default Camera