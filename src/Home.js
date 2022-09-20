import { useState } from "react";
import { Even } from "./Even";
import { Odd } from "./Odd";

export function Home(){
    const [odd, setOdd] = useState()
    const [even, setEven] = useState()

    async function fetching(){
        const fetched = await fetch("http://numbersapi.com/random/math");
        const parsed = await fetched.text()
        if(parsed){
            if(parsed.split(" ")[0] % 2){
                setOdd(parsed)
            }
            else{
                setEven(parsed)
            }
        }
    }

    return(
        <div>
            <button onClick={fetching}>Fetch :D</button>
            <Odd data={odd}/>
            <Even data={even} />
        </div>
    )
}