import { IoCheckmarkCircle } from "react-icons/io5";
import { Link, useNavigate, useParams  } from "react-router-dom";
import { Counter, useCounter } from "../../components/Counter";
import axios from "axios";
import { useEffect } from "react";

export default function Success() {
    const navigate = useNavigate()
    const counter = useCounter(5, ()=>{
        navigate("/panel");
    });
    const { orderID } = useParams();
    useEffect(()=>{
        axios.get(`http://localhost:3000/payment/redirect/${orderID}`)
    }, [])
    return (
        <div className="h-[100vh] -mt-16 grid items-center">
            <div className='flex flex-col items-center gap-6 w-fit mx-auto text-success'>
                <IoCheckmarkCircle className='text-9xl' />
                <span className='text-3xl font-semibold'>Płatność zrealizowana!</span>
                <div className="text-base-content italic flex flex-col items-center">
                    <span>Zostaniesz przekierowany do panelu kontrolnego</span>
                    <div>
                        <span>za </span>
                        <Counter className="text-xl" counter={counter} />
                        <span> sekund</span>
                      </div>
                    <div>lub <Link className="text-success font-bold" to="/panel">przejdź teraz</Link>.</div>
                </div>
            </div>
        </div>
    )
}
