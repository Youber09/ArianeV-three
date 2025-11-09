import { useRef } from "react"
import Rocket from "../../../public/Rocket.jsx"
import * as THREE from "three"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const RB = Math.PI / 180


const ThreeRocket = () => {

    const rocketRef = useRef<THREE.Group>(null)

    useGSAP(() => {

        if (!rocketRef.current) return

        const tl = gsap.timeline({
            scrollTrigger: {
                // markers: true,
                scrub: 2,
                trigger: `.section1`,
                start: `bottom bottom`,
                end: `600% top`
            }
            })

            const tl2 = gsap.timeline({
                scrollTrigger: {
                    // markers: true,
                    scrub: 2,
                    trigger: `.section1`,
                    start: `bottom bottom`,
                    end: `600% top`
                }
            })

            tl.to(rocketRef.current.position, {
                duration: 1,
            }).to(rocketRef.current.position, {
                duration: 1,
            }).to(rocketRef.current.position, {
                duration: 1,
                x: 0,
                y: 20,
                z: 3
            }).to(rocketRef.current.position, {
                duration: 1,
                x: 0,
                y: 20,
                z: 3
            }).to(rocketRef.current.position, {
                duration: 1,
                x: 0,
                y: 20,
                z: 3
            })
            .to(rocketRef.current.position, {
                duration: 1,
                x: 0,
                y: 100,
                z: 3,
                ease: "power4.in"
            })

            tl2.to(rocketRef.current.rotation, {
                duration: 1,
            }).to(rocketRef.current.rotation, {
                duration: 1,
            }).to(rocketRef.current.rotation, {
                duration: 1,
                x: RB * -30,
                y: RB * 45,
                z: 0
            }).to(rocketRef.current.rotation, {
                duration: 2,
                x: RB * -30,
                y: RB * 720,
                z: 0
            })
            .to(rocketRef.current.rotation, {
                duration: 1,
                x: RB * 0,
                y: RB * 720,
                z: 0,
                ease: "power4.in"
            })
            

    }, [])

    return (
        <>
            <Rocket ref={rocketRef}  position={[0, 10, 0]} rotation={[0, 0, 0]} scale={0.5} />
        </>
    )
}

export default ThreeRocket