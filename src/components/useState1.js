import { useState } from "react"

export default function UseState1(){
    
    let [count,setCount ] = useState(0);

    return(
        <div>
            <button onClick={()=>{
                count = count +1
                setCount(count);
            }}>+</button>
            <span>{count}</span>
            <button onClick={()=>{
                count = count - 1;
                setCount(count);
            }}>-</button>        
        </div>
    )
}

