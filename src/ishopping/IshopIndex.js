import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import IshopHome from './IshopHome'
import IshopLogin from './IshopLogin'
import IshopRegister from './IshopRegister'
import IshopDashbord from './IshopDashbord'
import { CookiesProvider } from 'react-cookie'
import { IshopProducts } from './IshopProducts'
import { IshopProductDetails } from './IshopProductDetails'
import DisplayItem from '../components/DisplayItem'
import BootstrapModel from './BootstrapModel'
import Modal from 'react-bootstrap/Modal'


export default function IshopIndex(){
    
    return(
        <div className="container">
            <header className="bg-danger p-1 text-center text-white mt-2">
                <h1>I shopping</h1>
                
            </header>
            <section className='row mt-2' >
               <BrowserRouter>
               <nav className='col-2'>
                    <div className='mb-2'>
                        <Link to='/home' className='btn btn-danger w-100'>Home</Link>
                    </div>
                    <div className='mb-2'> 
                        <Link to='/register' className='btn btn-danger w-100'>Register</Link>
                    </div>
                    <div className='mb-2'>
                        <Link to='/login' className='btn btn-danger w-100'>Login</Link>
                    </div>
                    <div className='mb-2'>
                        <Link to='/dashboard' className='btn btn-danger w-100'>Shopping</Link>
                    </div>
                </nav>
                <main className='col-10'>
                <Routes>
                    <Route path='' element={<IshopHome/>}></Route>
                    <Route path='/home' element={<IshopHome/>}></Route>
                    <Route path='/login' element={<IshopLogin/>}></Route>
                    <Route path='/register' element={<IshopRegister/>}></Route>
                    <Route path='/dashboard' element={
                    <CookiesProvider>
                        <DisplayItem/>
                    </CookiesProvider>
                    
                    
                    }></Route>
                    <Route path='/products/:category' element={<IshopProducts/>}/>
                    <Route path='details/:id' element={<IshopProductDetails/>}/>
                    <Route path='/errorpage' element={
                        <div>
                            <h1>Page Not Found</h1>
                            <Link to='/login'>Try Again</Link>
                        </div>
                    }></Route>
                </Routes>

               </main>
               </BrowserRouter>
            </section>
        </div>
    )
}