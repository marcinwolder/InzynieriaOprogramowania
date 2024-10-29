import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import { sleep } from "../../utils/asyncUtils";
import clsx from "clsx";

export default function Panel() {
    const [loading, setLoading] = useState<boolean>(true)
    useEffect(()=>{
        console.log("#1");
        (async ()=>{
            await sleep(2500)
            setLoading(false)
            console.log("#2");
        })()
    }, [])
    return (
        <>
            <div className="flex">
                <div className="w-fit px-4 h-screen -mt-16 flex flex-col justify-center">
                    <div className="stats stats-vertical shadow">
                        <div className="stat">
                            <div className="stat-title">Ilość serwerów</div>
                            <div className={clsx("stat-value mt-1", {"skeleton": loading})}>
                                <span className={clsx({"invisible": loading})}>2/5</span>
                            </div>
                            <div className={clsx("stat-desc mt-1", {"skeleton": loading})}>
                                <span className={clsx({"invisible": loading})}>Dla 1 gry</span>
                            </div>
                        </div>

                        <div className="stat">
                            <div className="stat-title">Maksymalna ilość graczy</div>
                            <div className={clsx("stat-value mt-1", {"skeleton": loading})}>
                                <span className={clsx({"invisible": loading})}>4</span>
                            </div>
                            <div className={clsx("stat-desc mt-1", {"skeleton": loading})}>
                                <span className={clsx({"invisible": loading})}>🔼 +3 (300%)</span>
                            </div>
                        </div>

                        <div className="stat">
                            <div className="stat-title">Średnia ilość graczy online</div>
                            <div className={clsx("stat-value mt-1", {"skeleton": loading})}>
                                <span className={clsx({"invisible": loading})}>1</span>
                            </div>
                            <div className={clsx("stat-desc mt-1", {"skeleton": loading})}>
                                <span className={clsx({"invisible": loading})}>▶️ 1 (100%)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 items-center mx-auto">
                    <div className="card bg-base-100 w-64 shadow-xl cursor-pointer hover:w-72 transition-all">
                        <figure className={clsx({"skeleton": loading})}>
                            <img
                            className={clsx({"invisible": loading})}
                            src="/src/assets/server/server_2-removebg-preview.png"
                            alt="server" />
                            <img
                            className={clsx("absolute w-1/6 rounded-md top-4 right-4", {"invisible": loading})}
                            src="/src/assets/server/minecraft.png"
                            alt="minecraft logo" />
                        </figure>
                        <div className="card-body">
                            <h2 className={clsx("card-title", {"skeleton": loading})}>
                                <span className={clsx({"invisible": loading})}>
                                    Serwer Testowy
                                </span>
                            </h2>
                            <p className={clsx({"skeleton": loading})}>
                                <span className={clsx({"invisible": loading})}>Serwer stworzony na potrzeby testów oraz ...</span>
                            </p>
                            <div className={clsx("card-actions justify-end mt-1", {"skeleton": loading})}>
                                <div className={clsx("badge badge-outline", {"invisible": loading})}>Wyłączony</div>
                                <div className={clsx("badge text-success-content badge-success", {"invisible": loading})}>Minecraft</div>
                            </div>
                        </div>
                    </div>
                    <Link to="/panel/c1c6e-2eb85-7f0b7-576c6">
                        <div className="card bg-base-100 w-64 shadow-xl cursor-pointer hover:w-72 transition-all">
                            <figure className={clsx({"skeleton": loading})}>
                                <img
                                className={clsx({"invisible": loading})}
                                src="/src/assets/server/server_3-removebg-preview.png"
                                alt="server" />
                                <img
                                className={clsx("absolute w-1/6 rounded-md top-4 right-4", {"invisible": loading})}
                                src="/src/assets/server/minecraft.png"
                                alt="minecraft logo" />
                            </figure>
                            <div className="card-body">
                                <h2 className={clsx("card-title", {"skeleton": loading})}>
                                    <span className={clsx({"invisible": loading})}>
                                        Serwer Testowy 2
                                    </span>
                                </h2>
                                <p className={clsx({"skeleton": loading})}>
                                    <span className={clsx({"invisible": loading})}>Drugi serwer stworzony na potrzeby testów.</span>
                                </p>
                                <div className={clsx("card-actions justify-end mt-1", {"skeleton": loading})}>
                                    <div className={clsx("badge badge-outline", {"invisible": loading})}>Wyłączony</div>
                                    <div className={clsx("badge text-success-content badge-success", {"invisible": loading})}>Minecraft</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <div className="card bg-base-100 w-64 shadow-xl cursor-pointer hover:w-72 hover:text-xl transition-all aspect-square opacity-60">
                        <div className="card-body flex items-center justify-center">
                            <FaPlus/>
                            <span className="mx-auto pt-2">
                                Stwórz nowy serwer
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
