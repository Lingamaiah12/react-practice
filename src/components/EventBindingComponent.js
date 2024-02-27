import { useState } from "react"


export function EventBindingComponent(){
    const [userName, setUserName] =useState('')
    function handleUserName(e){

        setUserName(e.target.value);

    }
    return(
        
        <div>
            <h1>Login</h1>
            <input type="text" onChange={handleUserName}></input>
            <h1>{userName}</h1>
        </div>
        
    )

}