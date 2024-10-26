import { useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";

enum I_ThemeNames {
    "light" = "nord",
    "dark" = "dim"
}

export default function Navbar() {
    const [theme, setTheme] = useState<I_ThemeNames>(I_ThemeNames.light);
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h7"
                    />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                    <li>
                    <a>Homepage</a>
                    </li>
                    <li>
                    <a>Portfolio</a>
                    </li>
                    <li>
                    <a>About</a>
                    </li>
                </ul>
                </div>
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost text-xl">PlayGrid</a>
            </div>
            <div className="navbar-end">
                <button
                className="btn btn-ghost btn-circle"
                onClick={() => {
                    if (
                        document.querySelector("html")?.getAttribute("data-theme") !==
                        I_ThemeNames.dark
                    ) {
                        document
                        .querySelector("html")
                        ?.setAttribute("data-theme", I_ThemeNames.dark);
                        setTheme(I_ThemeNames.dark);
                    } else {
                        document
                            .querySelector("html")
                            ?.setAttribute("data-theme", I_ThemeNames.light);
                        setTheme(I_ThemeNames.light);
                    }
                }}
                >
                {theme !== I_ThemeNames.light ? (
                    <IoSunny />
                ) : (
                    <IoMoon />
                )}
                </button>
                <button className="btn btn-ghost btn-circle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                </button>
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar placeholder">
                    <div className="bg-neutral text-neutral-content w-10 rounded-full">
                        <span className="text-md">MW</span>
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li>
                      <a className="justify-between">
                        Panel sterowania
                        <span className="badge">New</span>
                      </a>
                    </li>
                    <li><a>Ustawienia konta</a></li>
                    <li><a>Wyloguj</a></li>
                  </ul>
                </div>
            </div>
        </div>
    );
}
