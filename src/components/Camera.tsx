import { useThree } from "@react-three/fiber"
import gsap from "gsap"
import {useGSAP} from "@gsap/react"


const RB = Math.PI / 180

const Camera = () => {

  const {camera} = useThree()

  useGSAP(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        // markers: true,
        scrub: 2,
        trigger: `.section1`,
        start: `bottom bottom`,
        end: `500% top`
      }
    })

    const tl2 = gsap.timeline({
      scrollTrigger: {
        // markers: true,
        scrub: 2,
        trigger: `.section1`,
        start: `bottom bottom`,
        end: `500% top`
      }
    })

    tl.to(camera.position, {
      x: 0,
      y: 40,
      z: 40,
      duration: 1,
      ease: `sine.in`
    }).to(camera.position, {
      duration: 1,
      x:10,
      y:10,
      z:10,
      ease: `sine.in`
    }).to(camera.position, {
      duration: 1,
      x:-1,
      y:24,
      z:8,
      ease: `sine.in`
    }).to(camera.position, {
      duration: 1,
      x:-1,
      y:24,
      z:8,
      ease: `sine.in`
    }).to(camera.position, {
      duration: 1,
      x:-1,
      y:24,
      z:8,
      ease: `sine.in`
    })
    

    tl2.to(camera.rotation, {
      x: RB * -40,
      y: 0,
      z: 0,
      duration: 1,
      ease: `power1.in`
    }).to(camera.rotation, {
      duration: 1,
      ease: `power1.inOut`,
      x: RB * 20,
      y: RB * 40,
      z: 0
    }).to(camera.rotation, {
      duration: 1,
      ease: `power1.in`,
      x: RB * -18,
      y: RB * -10,
      z: 0
    }).to(camera.rotation, {
      duration: 1,
      ease: `power1.in`,
      x: RB * -18,
      y: RB * -10,
      z: 0
    }).to(camera.rotation, {
      duration: 1,
      ease: `power1.in`,
      x: RB * -18,
      y: RB * -10,
      z: 0
    })


  }, [])

  

    
    console.log(camera.position)

  return null
}

export default Camera