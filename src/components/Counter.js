import { useState } from "react";


export function Counter(){

    var [counter,setCounter] = useState(1);

    function IncrementBtn(){

        setCounter(counter++);
        
    }

    function DecrementBtn(){
        if(counter==1){
           var btn =  document.getElementById('btnDec');
           
           
        }else{
            setCounter(--counter);
        }
        

    }

    return(
        <>
        <div className="container m-4">
            <button id='btnDec'  className="btn btn-primary" onClick={()=>{
                DecrementBtn()
            }}>-</button>
            <b>   {counter} </b>
            <button className="btn btn-primary" onClick={()=>{
                IncrementBtn()
            }}>+</button>
        </div>
        </>
    )
} 