import { useEffect, useState } from "react";

const useCounter = (value: number, callback?: ()=>{}) => {
    const [counter, setCounter] = useState(value);
    useEffect(()=>{
        if(counter < 0 && callback){
            callback()
        }
        const id = setTimeout(()=>setCounter(val=>val-1), 1000);
        return ()=>{
            clearTimeout(id);
        }
    }, [counter])
    return counter;
}

export default useCounter;