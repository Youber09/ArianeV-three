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

    const boxes : {position: [number, number, number], rotation: [number, number, number], scale: number}[] = Array.from({ length: 100 }, () => ({
        position: [
            floatFixer(THREE.MathUtils.randFloatSpread(150)),
            floatFixer(THREE.MathUtils.randFloatSpread(150)),
            floatFixer(THREE.MathUtils.randFloatSpread(100)),
        ],
        rotation: [
            THREE.MathUtils.randFloatSpread(10),
            THREE.MathUtils.randFloatSpread(5),
            THREE.MathUtils.randFloatSpread(10),
        ],
        scale: (Math.random() * 2)
    }))


    return (
        <>
            {boxes.map(({position, rotation, scale},i) => (
                <Boxes key={i} position={position} rotation={rotation} scale={scale} />
            ))}
        </>
    )
}

export default RandomBoxes