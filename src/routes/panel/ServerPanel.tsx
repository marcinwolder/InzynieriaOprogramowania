import { useEffect, useState } from "react";
import { sleep } from "../../utils/asyncUtils";

export default function ServerPanel() {
    const [loading, setLoading] = useState<boolean>(true)
    useEffect(()=>{
        (async ()=>{
            await sleep(1400)
            setLoading(false)
        })()
    }, [])
    return (
        <div className="h-[calc(100vh-4rem)] flex items-center justify-center">
            {loading ? 
            <span className="loading loading-bars loading-lg"></span>:
            <div className="w-full h-full flex items-center justify-between px-8">
                <div className="flex flex-col items-center gap-8">
                    <ul className="steps steps-vertical">
                        <li className="step step-primary">Stwórz serwer</li>
                        <li className="step step-primary ">Ukończ konfigurację</li>
                        <li className="step step-primary">Uruchom serwer</li>
                        <li className="step font-bold">Dołącz do gry</li>
                    </ul>
                    <div className="flex flex-col items-center">
                        <p className="text-lg font-semibold">Adres serwera:</p>
                        <p className="font-mono">127.0.0.1:25565</p>
                    </div>
                    <div>
                        <div className="btn btn-error text-error-content">Wyłacz serwer</div>
                    </div>
                </div>
                <div className="w-[60%] aspect-video cursor-text">
                    <div className="mockup-code h-full text-xs">
                        <pre data-prefix="$"><code>java -Xmx1024M -Xms1024M -jar server.jar</code></pre>
                        <pre data-prefix=""><code>Starting net.minecraft.server.Main</code></pre>
                        <pre data-prefix=""><code>[19:53:24] [ServerMain/INFO]: Environment: Environment[sessionHost=https://sessionserver.mojang.com, servicesHost=https://api.minecraftservices.com, name=PROD]</code></pre>
                        <pre data-prefix=""><code>[19:53:25] [ServerMain/INFO]: No existing world data, creating new world</code></pre>
                        <pre data-prefix=""><code>[19:53:26] [ServerMain/INFO]: Loaded 1337 recipes</code></pre>
                        <pre data-prefix=""><code>[19:53:26] [ServerMain/INFO]: Loaded 1448 advancements</code></pre>
                        <pre data-prefix=""><code>[19:53:27] [Server thread/INFO]: Starting minecraft server version 1.21.3</code></pre>
                        <pre data-prefix=""><code>[19:53:27] [Server thread/INFO]: Loading properties</code></pre>
                        <pre data-prefix=""><code>[19:53:27] [Server thread/INFO]: Default game type: SURVIVAL</code></pre>
                        <pre data-prefix=""><code>[19:53:27] [Server thread/INFO]: Generating keypair</code></pre>
                        <pre data-prefix=""><code>[19:53:27] [Server thread/INFO]: Starting Minecraft server on *:25565</code></pre>
                        <pre data-prefix=""><code>[19:53:27] [Server thread/INFO]: Using default channel type</code></pre>
                        <pre data-prefix=""><code>[19:53:27] [Server thread/INFO]: Preparing level "world"</code></pre>
                        <pre data-prefix=""><code>[19:53:31] [Server thread/INFO]: Preparing start region for dimension minecraft:overworld</code></pre>
                        <pre data-prefix=""><code>[19:53:31] [Worker-Main-6/INFO]: Preparing spawn area: 2%</code></pre>
                        <pre data-prefix=""><code>[19:53:32] [Worker-Main-7/INFO]: Preparing spawn area: 2%</code></pre>
                        <pre data-prefix=""><code>[19:53:32] [Worker-Main-3/INFO]: Preparing spawn area: 2%</code></pre>
                        <pre data-prefix=""><code>[19:53:33] [Worker-Main-6/INFO]: Preparing spawn area: 2%</code></pre>
                        <pre data-prefix=""><code>[19:53:33] [Worker-Main-2/INFO]: Preparing spawn area: 2%</code></pre>
                        <pre data-prefix=""><code>[19:53:34] [Worker-Main-7/INFO]: Preparing spawn area: 18%</code></pre>
                        <pre data-prefix=""><code>[19:53:34] [Worker-Main-10/INFO]: Preparing spawn area: 18%</code></pre>
                        <pre data-prefix=""><code>[19:53:35] [Worker-Main-2/INFO]: Preparing spawn area: 51%</code></pre>
                        <pre data-prefix=""><code>[19:53:35] [Worker-Main-2/INFO]: Preparing spawn area: 51%</code></pre>
                        <pre data-prefix=""><code>[19:53:35] [Server thread/INFO]: Time elapsed: 4146 ms</code></pre>
                        <pre data-prefix=""><code>[19:53:35] [Server thread/INFO]: Done (8.409s)! For help, type "help"</code></pre>
                        <pre data-prefix="$"><code className="animate-ping">|</code></pre>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-2 w-[20%]">
                    <h4 className="text-lg">Pliki serwera:</h4>
                    <ul className="menu menu-xs bg-base-200 rounded-lg w-full">
                        <li>
                            <details>
                                <summary>
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-4 w-4">
                                        <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                                    </svg>
                                    libraries
                                </summary>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-4 w-4">
                                        <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                                    </svg>
                                    logs
                                </summary>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-4 w-4">
                                        <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                                    </svg>
                                    versions
                                </summary>
                                <ul>
                                    <li>
                                        <details>
                                            <summary>
                                                <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="h-4 w-4">
                                                    <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                                                </svg>
                                                1.21.3
                                            </summary>
                                            <ul>
                                                <li>
                                                    <a>
                                                        <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="h-4 w-4">
                                                            <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                                        </svg>
                                                        server-1.21.3.jar
                                                    </a>
                                                </li>
                                            </ul>
                                        </details>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-4 w-4">
                                        <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                                    </svg>
                                    world
                                </summary>
                            </details>
                        </li>
                        <li>
                            <a>
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4">
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                </svg>
                                banned-ips.json
                            </a>
                        </li>
                        <li>
                            <a>
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4">
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                </svg>
                                banned-players.json
                            </a>
                        </li>
                        <li>
                            <a>
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4">
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                </svg>
                                eula.txt
                            </a>
                        </li>
                        <li>
                            <a>
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4">
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                </svg>
                                ops.json
                            </a>
                        </li>
                        <li>
                            <a>
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4">
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                </svg>
                                server.jar
                            </a>
                        </li>
                        <li>
                            <a>
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4">
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                </svg>
                                server.properties
                            </a>
                        </li>
                        <li>
                            <a>
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4">
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                </svg>
                                usercache.json
                            </a>
                        </li>
                        <li>
                            <a>
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4">
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                </svg>
                                whitelist.json
                            </a>
                        </li>
                    </ul>
                </div>
            </div>}
        </div>
    )
}
