import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Link, Routes} from 'react-router-dom';
import '../Shopper/Navbar.css'
import LoginBtn from './Login';
import Items from './Products';
import ItemDetails from './ProductsDetails';

import RegistrationBtn from './Registration';
import CartItems from './cartItems';

const Navigation = () => {
    const [logged, setLogged] = useState(false);
    const [UserName , setUserName] = useState('')

    const handleLogout = () => {
        setLogged(false);
        setUserName('')
        console.log('after log out ',UserName);
    } 
    console.log('username',UserName); 
    
    useEffect(()=>{
        const user = localStorage.getItem('details')
        if(user){
            const userData = JSON.parse(user)
            userData.forEach(element => {
                setUserName(element.name)
            });
        }
    })
    return (
        <BrowserRouter>
            <div className='container'>
                <div className="nav">
                    <div className='title'>
                        <h1>Shopper</h1>
                    </div>
                    <div className='UserName'>
                        <h4>{UserName}</h4>
                    </div>
                    <div>
                        {logged ? (
                            <Link to='/' onClick={handleLogout} className='btn btn-danger'>Logout</Link>
                        ) : (
                            <Link to='/login' className='btn btn-danger'>Login</Link>
                        )}

                        

                    </div>
                    <div>
                        
                    </div>
                </div>
                <div>
                    <Routes>
                    {logged ? (
                            <>
                                <Route path='/products' element={<Items/>}/>
                                <Route path='/cartitems' element={<CartItems/>}/>
                            </>
                        ) : (
                            <>
                            <Route path='/products' element={<LoginBtn setLogged={setLogged} />}/>
                            
                            </>
                        )}
                        
                        <Route path='/' element={<Items logged={logged}/>}/>
                        <Route path='/home' element={<Items logged={logged}/>}/>
                        <Route path='/login' element={<LoginBtn setLogged={setLogged} />}/>
                        <Route path='/register' element={<RegistrationBtn/>}/>
                        
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default Navigation;
