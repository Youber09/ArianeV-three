import Github from "../svgs/Github"


const Footer = () => {
  return (
    <div className="bg-black flex flex-col z-50 overflow-hidden ">
        <div className="flex bg-black flex-col z-50 w-screen p-[10%] items-center justify-around mb-[-1%]">
            <div className="flex flex-col items-center justify-center">
                <p className="text-white Font text-[5vw] text-center">INSPIRATION</p>
                <iframe className="w-[70vw] aspect-video" src="https://www.youtube.com/embed/wTZcGN4N334?si=AddbTcSY885jgLJ4" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className="text-white Font text-[5vw] text-center mt-[25%]">CODE SOURCE</p>
                <button className="text-black  text-[2vw] rounded-full transition-all hover:scale-102 cursor-pointer font-bold">
                    <a href="https://github.com/Youber09/ArianeV-three" target="blank"><Github /></a>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Footer