import { useContext } from "react"
import { userContext } from "./UseContex"
import { context } from "./Contex/Home";

export function Product(){

    let name = useContext(context);
    return(
        <>
        <h1>Hello - This is product </h1>
        <h1>hello - {name}</h1>
        
        </>
    )
}