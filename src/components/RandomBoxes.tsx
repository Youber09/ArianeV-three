import * as THREE from "three"
import Boxes from "./Boxes"

const RandomBoxes = () => {

    const boxes = Array.from({ length: 200 }, () => ({
        position: [
            THREE.MathUtils.randFloatSpread(150),
            THREE.MathUtils.randFloatSpread(150),
            THREE.MathUtils.randFloatSpread(150),
        ],
        rotation: [
            THREE.MathUtils.randFloatSpread(10),
            THREE.MathUtils.randFloatSpread(5),
            THREE.MathUtils.randFloatSpread(10),
        ],
        scale: THREE.MathUtils.randFloatSpread(5)
    }))

    return (
        <>
            {boxes.map((b,i) => (
                <Boxes key={i} position={b.position} rotation={b.rotation} scale={b.scale} />
            ))}
        </>
    )
}

export default RandomBoxes