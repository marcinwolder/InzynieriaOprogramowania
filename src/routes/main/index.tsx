import clsx from "clsx";
import Typewriter from "./Typewriter";
import { FaArrowDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import OfferTable from "./OfferTable";
import { FaArrowTurnDown } from "react-icons/fa6";

export default function Main() {
    const [scrolled, setScrolled] = useState(false)
    useEffect(()=>{
        const func = ()=>{
            if (window.scrollY === 0) {
                setScrolled(false)
            } else {
                setScrolled(true)
            }
        }
        func()
        window.addEventListener("scroll", func)
        return ()=>{
            window.removeEventListener("scroll", func)
        }
    }, [window.scrollY])

    return (
        <>
            <div className="flex px-8 items-center gap-8 w-fit h-screen -mt-16 mx-auto">
                <img className="h-96" src="./logo.jpg" alt="logo" />
                <div className="">
                    <h1 className="text-6xl font-serif">Twój hosting serwerów<br/>do grania w kratkę</h1>
                    <Typewriter />
                </div>
            </div>
            <div className="h-screen anchor-sklep flex items-center justify-center">
                <div className="min-h-[32em]">
                    <OfferTable/>
                </div>
            </div>
            {/* Fixed Buttons */}
            <div className={clsx("fixed w-full transition-all", {"-bottom-16": scrolled, "bottom-0": !scrolled})}>
                <div onClick={()=>{
                    if (!scrolled) {
                        setScrolled(true);
                        scrollTo({behavior: 'smooth', top: document.querySelector('.anchor-sklep')?.getBoundingClientRect().top});
                    }
                }} className="bg-info text-info-content w-fit flex items-start gap-4 mx-auto px-6 pt-4 rounded-t-xl cursor-pointer">
                    <FaArrowDown className="text-2xl h-10 duration-400 animate-bounce-slow"/>
                    <p className="font-semibold">Sprawdź ofertę</p>
                </div>
            </div>
            <div className={clsx("fixed bottom-2 bg-info text-info-content rotate-180 rounded-full rounded-tl-none aspect-square w-10 flex items-center justify-center transition-all cursor-pointer", {"right-2": scrolled, "-right-12": !scrolled})}
                onClick={()=>{
                    scrollTo({top: 0, behavior: "smooth"})
                }}>
                <FaArrowTurnDown/>
            </div>
        </>
    )
}
