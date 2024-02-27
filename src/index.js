import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import NetflixIndexComponent from './components/NetflixIndexComponent';
import { EventBindingComponent } from './components/EventBindingComponent';
import { TwowayBindingComponent } from './components/TwowayBindingComponent';
import { ShoppingHeader } from './components/ShoppingHeader';
import { ShoppingComponent } from './components/ShoppingComponent';
import { ShoppingBody } from './components/ShoppingBody';
import { FormComponent } from './components/FormComponent';

import App from './App';
import { SetState } from './components/SetState';
import { UseState } from './components/UseState';
import { NetflixHeaderComponent } from './components/NetflixHeaderComponent';
import UseContext from './components/UseContex';
import { Todo } from './components/Todo';
import { Counter } from './components/Counter';
import { UseReducer } from './components/UseReducer';
import { UseReducerSubscribe } from './components/UseReducerSubscribe';
import App1 from './components/App1';
import { SortableArrayComponent } from './components/SortableArrayComponent ';
import { CustomSort } from './components/CustomSort';
import { SortAnArray } from './components/SortAnArray';
import ShoppingIndex from './components/Shopping/ShoppingIndex';
import IshopIndex from './ishopping/IshopIndex';
import AxiosDemo from './components/AxiosDemo';
import FormikDemo from './components/FormikDemo';
import FormikValidations from './components/FormikValidations';
import YupValidations from './components/YupValidations';
import { CookiesProvider} from 'react-cookie';
import UseCookies from './components/UseCookies';

import DispalyItem from './components/DisplayItem';
import CartItem from './components/CartItem';
import PaymentMethod from './components/PaymentMethod';
import HomeComponent from './components/E-Commerce-Site/HomeComponent';
import Button from './components/E-Commerce-Site/Button';
import HomeIndex from './components/E-Commerce-Site/HomeIndex';
import UseState1 from './components/useState1';
import MobileChange from './components/UseReducer1';
import MobileData from './components/MobileData';
import { ClassProp } from './components/ClassProp';
import UseRef from './components/E-Commerce-Site/Useref';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
