import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
    createHashRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css'

import App from './App';
import Sklep from './routes/sklep';
import Panel from './routes/panel';
import ServerPanel from './routes/panel/ServerPanel';
import Success from './routes/redirect/Success';
import { Login, Register, Reset } from './routes/auth';

const router = createHashRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "auth",
                children: [
                    {
                        path: "login",
                        element: <Login />
                    },
                    {
                        path: "register",
                        element: <Register />
                    },
                    {
                        path: "reset",
                        element: <Reset />
                    }
                ]
            },
            {
                path: "redirect/:orderID",
                element: <Success />
            },
            {
                path: "shop",
                element: <Sklep />
            },
            {
                path: "panel/:serverID",
                element: <ServerPanel />,
            },
            {
                path: "panel",
                element: <Panel />
            }
        ]
    }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
