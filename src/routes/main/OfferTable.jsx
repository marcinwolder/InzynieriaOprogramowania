import { useState } from "react";
import { useEffect } from "react";

export default function OfferTable() {
    const [counter, setCounter] = useState(48);
    useEffect(()=>{
        const timeout = setInterval(()=>{
            setCounter(val => val === 0 ? 60 : val-1)
        }, 1000)
        return ()=>{
            clearInterval(timeout);
        }
    }, [])
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="flex gap-4 items-end mb-4">
                <div className="bg-base-200 pt-2 rounded-2xl">
                    <div className="card bg-base-100 shadow-lg h-96">
                        <figure>
                            <img src="/src/assets/abonament/level_1-removebg-preview.png" className="h-56" alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            Abonament <b>Lite</b>
                        </div>
                        <div className="card-actions p-3 flex justify-center">
                            <p className="text-error text-sm italic line-through">*25,00 zł</p>
                            <p className="font-bold">20,00 zł</p>
                        </div>
                    </div>
                </div>
                <div className="bg-success pt-1 rounded-2xl">
                    <div className="mx-auto w-fit text-success-content my-2">NAJCZĘŚCIEJ WYBIERANY!</div>
                    <div className="card bg-base-100 shadow-lg h-[26rem]">
                        <figure>
                            <img src="/src/assets/abonament/level_3-removebg-preview.png" className="h-56" alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            Abonament <b>Premium</b>
                        </div>
                        <div className="card-actions p-3 flex justify-center">
                            <p className="text-error text-sm italic line-through">*250,00 zł</p>
                            <p className="font-bold">160,00 zł</p>
                        </div>
                    </div>
                </div>
                <div className="bg-base-300 pt-3 rounded-2xl">
                    <div className="card bg-base-100 shadow-lg h-96">
                        <figure>
                            <img src="/src/assets/abonament/level_2-removebg-preview.png" className="h-56" alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            Abonament <b>Standard</b>
                        </div>
                        <div className="card-actions p-3 flex justify-center">
                            <p className="text-error text-sm italic line-through">*75,00 zł</p>
                            <p className="font-bold">52,00 zł</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="btn btn-success btn-wide">Zasubskrybuj!</div>
            <span className="text-3xl font-extralight">Pośpiesz się, a kupisz serwer taniej!</span>
            <div className="flex gap-5">
              <div>
                <span className="countdown font-mono text-4xl">
                    <span style={{"--value":15}}></span>
                </span>
                dni
              </div>
              <div>
                <span className="countdown font-mono text-4xl">
                    <span style={{"--value":10}}></span>
                </span>
                godzin
              </div>
              <div>
                <span className="countdown font-mono text-4xl">
                  <span style={{"--value":24}}></span>
                </span>
                minuty
              </div>
              <div>
                <span className="countdown font-mono text-4xl">
                  <span style={{"--value": counter}}></span>
                </span>
                sekundy
              </div>
            </div>
        </div>
    )
}
