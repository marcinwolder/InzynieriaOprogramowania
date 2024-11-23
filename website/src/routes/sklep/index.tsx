import { useEffect, useState } from "react";
import minecraftSrc from "../../assets/server/minecraft.png"

export default function Sklep() {

  return (
  <div>
    <div className="flex flex-col h-screen -mt-16 items-center justify-center">
      <h1 className="text-2xl mb-4">Wybierz opcję serwera</h1>
      <div className="h-2/3 w-full px-16 flex mt-8 gap-4">
        <div className="h-full w-1/5 mt-4">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th className="text-l">Specyfikacja</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>RAM</td>
                </tr>
                <tr>
                  <td>SSD</td>
                </tr>
                <tr>
                  <td>bla bla bla</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="h-full w-1/5 gap-4"> 
          <div tabIndex={0} className="collapse collapse-open border-base-300 border cursor-pointer">
            <div className="collapse-content">
              <div className="overflow-x-auto">
                <table className="table text-center">
                  <tbody>
                    <tr>
                      <th className="text-2xl">Lite</th>
                    </tr>
                    <tr>
                      <td> 4 GB </td>
                    </tr>
                    <tr>
                      <td>20 GB</td>
                    </tr>
                    <tr>
                      <td>no</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex justify-center">
                <button className="btn btn-ghost">to</button>
              </div>
            </div>
          </div> 
        </div>
        <div className="bg-green-100 h-full w-3/5"></div>
      </div>
    </div> 
    
    {/* Druga strona */}
    <div className="flex h-screen items-center justify-center">
      <div className="h-5/6 w-5/6 grid grid-rows-12 grid-flow-col gap-4">
        <div className="row-span-2 col-span-1">
          <h1 className="text-2xl my-4 mx-4 flex justify-between">
            <span>Plan:</span>
            <span>LITE</span>
          </h1>
        </div>
        <div className="row-span-1">
          <h2 className="text-2xl mx-4">Wybór gry: </h2>
        </div>

      {/* Wybór gry */}
        <div className="row-span-5 flex gap-4">

          <div className="card bg-base-100 flex flex-col w-1/6 shadow-xl">
          <div className="card-body items-center text-center flex-1 flex justify-end">
            <figure className="px-2 pt-2">
              <img
                src={minecraftSrc}
                alt="mineCraft"
                className="rounded-xl" />
            </figure>
            <div className="card-actions">
              <button className="btn btn-ghost">Buy Now</button>
            </div>
          </div>
        </div>

          <div className="card bg-base-100 flex flex-col w-1/6 shadow-xl">
          <div className="card-body items-center text-center flex-1 flex justify-end">
            <figure className="px-2 pt-2">
              <img
                src={minecraftSrc}
                alt="mineCraft"
                className="rounded-xl" />
            </figure>
            <div className="card-actions">
              <button className="btn btn-ghost">Buy Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Nazwa serwera */}
        <div className="row-span-2">
          <h2 className="text-2xl mx-4 my-4">Nazwij serwer: </h2>
        </div>

        <div className="row-span-2 ">
          <label className="form-control w-full max-w-xs">
            <input type="text" placeholder="example.0.1" className="input input-bordered w-full max-w-xs" />
            <div className="label">
              <span className="label-text-alt">min. 8 znaków</span>
            </div>
          </label>
        </div>
      </div>
    </div>

  </div>
  );
}
