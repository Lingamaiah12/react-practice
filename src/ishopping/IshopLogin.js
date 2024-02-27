import { useFormik } from "formik"
import { BrowserRouter ,Link, useNavigate} from "react-router-dom"
import { useState,useEffect } from "react"
import axios from "axios";
import { useCookies } from "react-cookie";
import { Border } from "react-bootstrap-icons";


export default function IshopLogin(){

    let navigate = useNavigate();
    const [users,setUser]=useState([]);
    const [cookie,setCookie,removeCookie] = useCookies();
    
    const formik = useFormik({
        initialValues:{
            UserName:'',
            Password:''
        },
        onSubmit:values=>{
            for(var user of users){
                if(user.UserName==values.UserName && user.Password==values.Password){
                    setCookie('username',user.UserName)
                    navigate('/dashboard');
                    break;
                }
                else{
                    navigate('/errorpage');
                }
            }
        }
    })

    useEffect(()=>{
        axios.get('http://localhost:3000/posts')
            .then(response=>{
                setUser(response.data);
            })
    },[])

    return(
        <div>
            <h1>User Login</h1>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" name="UserName" value={formik.values.UserName} onChange={formik.handleChange}></input></dd>
                    <dt>Password</dt>
                    <dd><input type="password" name="Password" value={formik.values.Password} onChange={formik.handleChange}></input></dd>
                    <button className="btn btn-primary">Login</button>
                </dl>
                <Link to='/register' className='btn btn-link'>New User</Link>
            </form>
        </div>
    )
}