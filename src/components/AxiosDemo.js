
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"


export default function AxiosDemo(){
    const [users ,setUsers] = useState([]);
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
    .then(function(response){
        setUsers(response.data);
    }).catch(function(ex){
        console.log(ex);
    })
    },[])  
    return(
        <div>
            <h1>Users</h1>
            <ol>
                {
                    users.map(user=>
                        <li key={user.id}>{user.title}</li>
                    )
                }
            </ol>
        </div>
    )
}