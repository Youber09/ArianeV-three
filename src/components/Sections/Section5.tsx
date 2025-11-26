import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import PlaceHolder from "./PlaceHolder"
import { SplitText } from "gsap/SplitText"
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
                // markers: true,
                start: `-100% 50%`,
                // toggleActions: `start`,
                end: `50% top`
            },
            ease: `sine.out`
        })

        gsap.from(`.explosionLink`, {
            duration: 0.8,
            opacity: 0,
            translateX: `200%`,
            scrollTrigger: {
                trigger: `.explosionLink`,
                // markers: true,
                start: `-100% 50%`,
                // toggleActions: `restart`,
                end: `50% top`
            },
            ease: `sine.out`
        })

        const split2 = new SplitText(`.explainingSection`, {type: "lines"})
        const lines2 = split2.lines

        gsap.from(lines2, {
            scrollTrigger: {
                trigger: `.explainingSection`,
                // toggleActions: `restart`,
                start: `top 60%`
            },
            stagger: 0.1,
            duration: 1,
            translateX: `-100%`,
            opacity: 0
        })

    }, [])



    return (
        <div className=" bg-black section5 flex flex-col items-center overflow-hidden">
            <PlaceHolder bg="" />
            <div className="text-white text-[5vw]/[5vw] Font z-5 text-center  flex flex-col justify-center items-center max-[1000px]:text-[8.4vw]/[8.4vw] p-[5%]">
                <p className="section5-text1 overflow-hidden">UN INCIDENT EST<br />MALHEUREUSEMENT ARRIVÉ</p>
                <div className="relative mt-[5%] section5-img1">
                    <img className="size-[40vw] max-[1000px]:size-[80vw] object-cover z-1 rounded-[1vw] section5-img1-1 relative " src="https://miro.medium.com/v2/resize:fit:1400/1*psxlqpwJPPhY_xkJp8r_PA.png" alt="" />
                </div>
                <div className="explosionLink">
                    <a href="https://www.youtube.com/watch?v=c9Hf4qTxdxs" target="_blank" className=" z-5 bg-white rounded-[0.5vw] w-[30vw] p-[1%] py-[0%] text-black flex justify-around items-center mt-[5%] transition-all hover:scale-101 cursor-pointer group text-[2vw] max-[1000px]:w-[40vw] max-[1000px]:text-[3vw]">REGARDER LA VIDEO <Eye /></a>
                </div>
            </div>

            <div className="p-[5%] mt-[30vh] explainingSection">
                <p className="text-white Font text-[3vw]/[6vw] text-center section5-text-2 max-[1000px]:text-[5vw]/[10vw] tracking-wider">
                    LES EMPLOYÉS DE L'ESA (EUROPEAN SPACE AGENCY) ONT REPRIS UN BOUT DE CODE DE ARIANE-IV, MAIS ILS ONT ASSUMÉS QUE LE CODE DE ARIANE-IV MARCHERA, DONC PAS BESOIN DE L'ADAPTER À ARIANE-V, QUI TRAVAILLE AVEC DES VALEURS BEACOUP PLUS IMPORTANTES CAR C'EST BEAUCOUP PLUS PUISSANT.
                </p>
            </div>

            <div className="p-[5%] mt-[30vh] explainingSection">
                <p className="text-white Font text-[3vw]/[6vw] text-center section5-text-2 max-[1000px]:text-[5vw]/[10vw] tracking-wider">
                    CHAQUE VARIABLE AVAIT UNE LIMITE RÉALISTE, POUR ÉCONOMISER LA MÉMOIRE ET LA VITESSE DE CALCUL, CAR LA POSSIBILITÉ DE VALEURS PLUS GRANDES IMPLIQUE PLUS DE CALCUL, ET ARIANE-V DÉPASSE LA LIMITE IMPOSÉE DANS LE CODE DE ARIANE-IV. 
                </p>
            </div>

            <div className="p-[5%] mt-[30vh] explainingSection">
                <p className="text-white Font text-[3vw]/[6vw] text-center section5-text-2 max-[1000px]:text-[5vw]/[10vw] tracking-wider">
                    C'EST COMME VERSER 10 LITRES D'EAU DANS UN VERS, ÇA CAUSE UN BUG OVERFLOW.
                </p>
            </div>

            <div className="p-[5%] mt-[30vh] explainingSection">
                <p className="text-white Font text-[3vw]/[6vw] text-center section5-text-2 max-[1000px]:text-[5vw]/[10vw] tracking-wider">
                    LA VARIABLE QUI A CAUSÉ LE PROBLÈME EST CELLE DE LA ACCÉLÉRATION HORIZONTALE DU VAISSEAU.
                </p>
            </div>

            <div className="p-[5%] mt-[30vh] explainingSection">
                <p className="text-white Font text-[3vw]/[6vw] text-center section5-text-2 max-[1000px]:text-[5vw]/[10vw] tracking-wider">
                    LE SYSTÈME DE NAVIGATION A SIGNALÉ UNE ERREUR ET C'ÉTAIT AU TOUR DU SYSTÈME DE SECOURS DE PRENDRE LE CONTRÔLE, SAUF QUE C'ÉTAIT LE MEME CODE, LE SYSTÈME PRINCIPAL N'AVAIT DONC PAS DE BONNE VALEURS ET ÇA A CRASH APRÉS 37 SECONDES.
                </p>
            </div>

            <div className="p-[5%] mt-[30vh] explainingSection">
                <p className="text-white Font text-[3vw]/[6vw] text-center section5-text-2 max-[1000px]:text-[5vw]/[10vw] tracking-wider">
                    POURQUOI 37 SECONDES? CAR LE VAISSEAU DÉCOLE VERTICALEMENT AU DÉBUT MAIS APRÉS QUELQUES SECONDES ÇA COMMENCE À TOURNER LENTEMENT POUR ÉCONOMISER LE CARBURANT.
                </p>
            </div>

            <div className="p-[5%] mt-[30vh] explainingSection">
                <p className="text-white Font text-[3vw]/[6vw] text-center section5-text-2 max-[1000px]:text-[5vw]/[10vw] tracking-wider">
                    C'EST À CE MOMENT QUE LA VALEUR DE LA VARIABLE DE LA ACCÉLÉRATION HORIZONTALE AUGMENTE ET LA LIMITE DE 32768 A ÉTÉ DÉPASSÉ.
                </p>
            </div>

            <div className="p-[5%] mt-[30vh] explainingSection">
                <p className="text-white Font text-[3vw]/[6vw] text-center section5-text-2 max-[1000px]:text-[5vw]/[10vw] tracking-wider">
                    LE COUT TOTAL DU MATÉRIEL QUI A EXPLOSÉ EST DE 370 MILLIONS DE DOLLARS.
                </p>
            </div>
            
            <PlaceHolder bg="black" />

        </div>
    )
}

export default Section5