import { nanoid } from "@reduxjs/toolkit"
import { useEffect, useState } from "react"

export function Odd({data}){
    const [ hidden, setHidden] = useState(true)
    const [array, setArray] = useState([])
    const [mapped, setMapped] = useState([])

    useEffect(()=>{
        if(data){
        setArray([...array, data])}

    },[data])

    useEffect(()=>{
        setMapped(array.map(item => <li id={item.toString().split(" ")[0]} key={nanoid()}>{item} <button type="button" onClick={removed} id={item.toString().split(" ")[0]}>Remove</button></li>))
    },[array])

    function removed(e){
        setArray(array.filter(item => item.toString().split(" ")[0] !== e.target.id))
    }

    return(
    <div>
        <button type="button" onClick={() => {setHidden(!hidden)}}>Show Odd List</button>
        <ul>
         {!hidden && mapped}
        </ul>
    </div>
        
    )

}