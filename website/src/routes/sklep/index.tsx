import minecraftSrc from "../../assets/server/minecraft.png"

export default function Sklep() {

  return (
  <div>
    {/* Strona z dostępnymi subskrypcjami */}
    <div className="flex flex-col h-screen -mt-12 items-center justify-center">
      <h1 className="text-2xl mb-4">Wybierz opcję serwera</h1>
      <div className="h-2/3 w-5/6 px-16 flex mt-8 gap-4">
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
                  <td>Procesor</td>
                </tr>
                <tr>
                  <td>RAM</td>
                </tr>
                <tr>
                  <td>SSD</td>
                </tr>
                <tr>
                  <td>Limit slotów</td>
                </tr>
                <tr>
                  <td>Okres min.</td>
                </tr>
                <tr>
                  <td>Lokalizacja</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* Serwer LITE */}
        <div className="h-full w-1/5 gap-4"> 
          <div tabIndex={0} className="collapse collapse-open border border-blue-300 cursor-pointer">
            <div className="collapse-content">
              <div className="overflow-x-auto">
                <table className="table text-center">
                  <tbody>
                    <tr>
                      <th className="text-2xl">Lite</th>
                    </tr>
                    <tr>
                      <td>1 x 3.6 GHz</td>
                    </tr>
                    <tr>
                      <td>4 GB</td>
                    </tr>
                    <tr>
                      <td>20 GB</td>
                    </tr>
                    <tr>
                      <td>max. 5</td>
                    </tr>
                    <tr>
                      <td>2 tyg.</td>
                    </tr>
                    <tr>
                      <td>Polska</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex justify-center">
                <button className="btn btn-ghost">✔</button>
              </div>
            </div>
          </div> 
        </div>
        {/* Serwer STANDARD */}
        <div className="h-full w-1/5 gap-4"> 
          <div tabIndex={0} className="collapse collapse-open border-blue-400 border cursor-pointer">
            <div className="collapse-content">
              <div className="overflow-x-auto">
                <table className="table text-center">
                  <tbody>
                    <tr>
                      <th className="text-2xl">Standard</th>
                    </tr>
                    <tr>
                      <td>3 x 3.6 GHz</td>
                    </tr>
                    <tr>
                      <td>8 GB</td>
                    </tr>
                    <tr>
                      <td>36 GB</td>
                    </tr>
                    <tr>
                      <td>max. 10</td>
                    </tr>
                    <tr>
                      <td>2 tyg.</td>
                    </tr>
                    <tr>
                      <td>Polska</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex justify-center">
                <button className="btn btn-ghost">↓</button>
              </div>
            </div>
          </div> 
        </div>
        {/* Serwer PREMIUM */}
        <div className="h-full w-1/5 gap-4"> 
          <div tabIndex={0} className="collapse collapse-open border-blue-500 border cursor-pointer">
            <div className="collapse-content">
              <div className="overflow-x-auto">
                <table className="table text-center">
                  <tbody>
                    <tr>
                      <th className="text-2xl">Premium</th>
                    </tr>
                    <tr>
                      <td>6 x 3.6 GHz</td>
                    </tr>
                    <tr>
                      <td>16 GB</td>
                    </tr>
                    <tr>
                      <td>64 GB</td>
                    </tr>
                    <tr>
                      <td>no limit!</td>
                    </tr>
                    <tr>
                      <td>1 mies.</td>
                    </tr>
                    <tr>
                      <td>Polska</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex justify-center">
                <button className="btn btn-ghost">↓</button>
              </div>
            </div>
          </div> 
        </div>
        {/* Serwer INDIVIDUAL */}
        <div className="h-full w-1/5 gap-4"> 
          <div tabIndex={0} className="collapse collapse-open border-blue-800 border cursor-pointer">
            <div className="collapse-content">
              <div className="overflow-x-auto">
                <table className="table text-center">
                  <tbody>
                    <tr>
                      <th className="text-2xl">Individual</th>
                    </tr>
                    <tr>
                      <td>max. 10 x 3.6 GHz</td>
                    </tr>
                    <tr>
                      <td>max. 32 GB</td>
                    </tr>
                    <tr>
                      <td>max. 126 GB</td>
                    </tr>
                    <tr>
                      <td>no limit!</td>
                    </tr>
                    <tr>
                      <td>1 mies.</td>
                    </tr>
                    <tr>
                      <td>Polska/inny</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex justify-center">
                <button className="btn btn-ghost">卐 + ☭</button>
              </div>
            </div>
          </div> 
        </div>
        {/* <div className="bg-green-100 h-full w-3/5">
        </div> */}
      </div>
    </div> 

    {/*Dostosowywanie serwera - druga strona */}
    <div className="flex h-screen items-center justify-center">
      <div className="h-5/6 w-2/3 grid grid-rows-12 grid-col-4 gap-x-16 gap-y-4">
        <div className="row-span-2 col-span-4">
          <h1 className="text-left text-2xl mx-2 my-4"> Plan: <span className="font-bold">Lite</span> </h1>
        </div>
        {/*Nazwa serwera */}
        <div className="row-span-4 col-span-2">
          <h2 className="text-2xl mx-2 my-4">Nazwij serwer: </h2>
          <label className="form-control w-full max-w-xs">
            <input type="text" placeholder="example.0.1" className="input input-bordered w-full max-w-xs" />
            <div className="label">
              <span className="label-text-alt">min. 8 znaków</span>
            </div>
          </label>
        </div>
        {/*Wybrór gry */}
        <div className="row-span-1 col-span-2">
          <h2 className="text-2xl  mx-4 my-4">Wybierz grę: </h2> 
        </div>
        <div className="row-span-7 col-span-2">
          <div className="flex gap-4 items-center mx-auto mu-auto">

            <div className="card bg-base-100 w-52 shadow-xl mx-auto my-auto">
              <figure className="px-10 pt-10">
                <img
                  src={minecraftSrc}
                  alt="mineCraft"
                  className="rounded-xl" />
              </figure>
              <div className="card-body items-center">
                <div className="card-actions">
                  <button className="btn btn-ghost">Minecraft</button>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 w-52 shadow-xl  mx-auto my-auto">
              <figure className="px-10 pt-10">
                <img
                  src={minecraftSrc}
                  alt="mineCraft"
                  className="rounded-xl" />
              </figure>
              <div className="card-body items-center">
                <div className="card-actions">
                  <button className="btn btn-ghost">Minecraft</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row-span-4 col-span-2 mx-2"> 
          <p>
            Przykładowe nazwy:
            <ul>
              <li>* example</li>
            </ul>
          </p>
        </div>
        <div className="row-span-2 col-span-2 my-auto"> 
          <button className="btn btn-outline btn-accent">Podsumowanie</button>
        </div>
      </div>
    </div>
    {/* <div className="flex h-screen items-center justify-center">
    </div> */}

  </div>
  );
}
