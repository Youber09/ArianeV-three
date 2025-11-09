import * as THREE from "three"
import Boxes from "./Boxes"

const floatFixer = (float: number) => {
    if (float > 0) {
        return float + 8
    }else{
        return float - 8
    }
}

const RandomBoxes = () => {

    const boxes = Array.from({ length: 200 }, () => ({
        position: [
            floatFixer(THREE.MathUtils.randFloatSpread(150)),
            floatFixer(THREE.MathUtils.randFloatSpread(150)),
            floatFixer(THREE.MathUtils.randFloatSpread(150)),
        ],
        rotation: [
            THREE.MathUtils.randFloatSpread(10),
            THREE.MathUtils.randFloatSpread(5),
            THREE.MathUtils.randFloatSpread(10),
        ],
        scale: (THREE.MathUtils.randFloatSpread(5) + 0.2)
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