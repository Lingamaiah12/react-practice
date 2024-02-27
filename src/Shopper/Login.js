import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

const LoginBtn = ({ setLogged }) => {
    const navigate = useNavigate();
    
    const [user,setUser] = useState({email:'',password:''}) 
    const [err,setErr] = useState('')
    const handleEmail = (e) => {
        setUser({
            ...user,
            email: e.target.value
        });
    }

    const handlePassword = (e) => {
        setUser({
            ...user,
            password: e.target.value
        });
    }

    
    const handleSubmit=(e)=>{
        e.preventDefault();
        const details = localStorage.getItem('details')

        if(details){
            const detailsStored = JSON.parse(details)
            console.log(detailsStored);
            detailsStored.forEach(element => {
                if(element.email !== user.email){
                    console.log(element.email);
                    console.log(user.email);
                    console.log('Try again');
                    setErr('Invalid User Credentials');
                }else{
                    navigate('/products');
                    setLogged(true); // Update the logged state
                    navigate('/home');
                }                
            });
        }

    }

    return (
        <div className='d-flex justify-content-center align-items-center'>
            <form className='align-item-center'>
                <h1>Login</h1>
                <label>Email</label>
                <input 
                    type="text" 
                    className="form-control" 
                    value={user.email} 
                    onChange={handleEmail}
                />
                <label>Password</label>
                <input 
                    type="password" 
                    className="form-control" 
                    value={user.password} 
                    onChange={handlePassword}
                />
                <button className='btn btn-primary mt-2 w-100' onClick={handleSubmit}>Submit</button>

                    <b><p className='ms-3 text-danger'>{err}</p></b>
                
                <hr/>
                <p className='ms-5'>New User</p>
                <Link to='/register' className='btn btn-primary mt-2 w-100' >Register</Link>
            </form> 
            
        </div>
    );
}

export default LoginBtn;
