

import React, { createContext } from "react"
import Signin from "./Login"
export const  context = createContext('react')

const Hello = () =>{
  
  const data= 'linga'
    return(
        <>
        <context.Provider value={data}>
            <Signin/>
        </context.Provider>
        </>
    )
}

export default Hello