import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./routes/main";

export default function App() {
    const location = useLocation()
    return (
        <>
            <Navbar />
            {
                location.pathname === "/" ? 
                <Main />:
                <Outlet/>
            }
        </>
    )
}