import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { BrowserRouter, useNavigate,Link } from "react-router-dom";



export default function IshopDashbord(){

    let navigate = useNavigate();
    const [categories,setCategories] = useState([]);
    const [cookie,setCookie,removeCookie] = useCookies();
    const [username,setUserName] =useState();
    
    function LoadCategories(){
        axios.get('https://fakestoreapi.com/products/categories')
        .then(response=>{
            
            setCategories(response.data);
            console.log(response.data);
            
        })
        
    }


        useEffect(()=>{
            if(cookie.username == undefined){
                
                navigate('/login')
                
            }else{
                categories.unshift('All');
                setUserName(cookie['username']);
                
                LoadCategories();
                
            }
            
        },[])

        function handleSignout(){
            removeCookie('username');
            navigate('/login');
        }
    return(
        <>
        <div>
            <h1>Hello ! {username} - <button className="btn btn-link" onClick={handleSignout} >Sign out</button></h1>
        </div>
        <div className="container d-flex flex-wrap">    
            
            <ol>
            {
             categories.map(item =>
                <li key={item}><Link to={'/products/'+item}><button className="btn btn-danger">{item.toUpperCase()}</button></Link></li>
             )   
            }
            </ol>
                
        </div>
        </>
    )
}