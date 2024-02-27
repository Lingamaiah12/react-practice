import React, { useContext,useState } from "react"

import { ShoppingHeader } from "./ShoppingHeader";
import { Home } from "./Home";
import { SetState } from "./SetState";

export const userContext = React.createContext();
export default function UseContext(){
    
    const [name,setName] = useState('');
    // const userDetails = {
    //     UserName:'linga',
    //     Email:'linga@gmail.com' 
    // }


    function HandleClick(e){
        setName('Linga')
    }   


    return(
        <>
        <userContext.Provider value={name}>
            <h1>Hello - useContext</h1>
            <button onClick={HandleClick}>Click</button>
            <Home/>
        </userContext.Provider>  
        </>
    )
}


