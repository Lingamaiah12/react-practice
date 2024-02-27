import axios from "axios";
import { useEffect, useState } from "react";

import { BrowserRouter, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import BootstrapModel from "../ishopping/BootstrapModel";

export default function DisplayItem() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [cookie,setCookie,removeCookie] = useCookies();
  const [username,setUserName] =useState();

  const navigate  = useNavigate();

  function LoadCategories(){
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      });
  }

  useEffect(() => {
      if(cookie.username == undefined){
        navigate('/login');
      }else{
        setUserName(cookie['username']);
        LoadCategories();
      }
  }, []);

  function handleCartItem(item) {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
      // If item is already in the cart, update the quantity
      const updatedCart = cart.map(cartItem =>
        cartItem.id === existingItem.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCart(updatedCart);
    } else {
      // If item is not in the cart, add it with quantity 1
      setCart([...cart, { ...item, quantity: 1 }]);
    }

    setTotal(total + item.price);
    alert(`${item.title} added to the cart`);
  }

  function handleDelete(cartItem) {
    setCart(cart.filter(item => item.id !== cartItem.id));
    setTotal(total - cartItem.price * cartItem.quantity);
  }

  function handleIncrement(cartItem) {
    const updatedCart = cart.map(item =>
      item.id === cartItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
    setTotal(total + cartItem.price);
  }

  function handleDecrement(cartItem) {
    if (cartItem.quantity > 1) {
      const updatedCart = cart.map(item =>
        item.id === cartItem.id ? { ...item, quantity: item.quantity - 1 } : item
      );
      setCart(updatedCart);
      setTotal(total - cartItem.price);
    }
  }
  function handlePayment(){
    if(cart==''){
        alert('Add Items')
    }
    else{
        
        alert('payment done')
    }
  }

  function handleSignout(){
    removeCookie('username');
    navigate('/login');
  }

  return (
    <div style={{overflow:'scroll' , height:'500px'}}>
      <h1>Hello ! {username}-
      <button className="btn btn-link" onClick={handleSignout}>Sign out</button>
      <BootstrapModel/>
      </h1>
      <div className="container d-flex flex-wrap">
        {products.map(item => (
          <div className="card w-25" key={item.id}>
            <div className="card-header">
              <img src={item.image} alt={item.title} style={{ width: '150px', height: '150px' }} />
            </div>
            <div className="card-body overflow" style={{ height: '100px', overflow: "scroll" }}>
              <span>{item.title}</span>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary w-100" onClick={() => handleCartItem(item)}>Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
      <div className="col-12">
        <h5>Cart Items</h5>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Preview</th>
              <th scope="col">Qty</th>
              <th scope="col">Price</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((cartItem, index) => (
              <tr key={cartItem.id}>
                <td>{index + 1}</td>
                <td>{cartItem.title}</td>
                <td><img src={cartItem.image} style={{ width: '50px', height: '50px' }} /></td>
                <td className="">
                  <button onClick={() => handleDecrement(cartItem)}>-</button>
                  <span>{cartItem.quantity}</span>
                  <button onClick={() => handleIncrement(cartItem)}>+</button>
                </td>
                <td>{Math.round(cartItem.price) * cartItem.quantity}</td>
                <td><button className="btn btn-danger" onClick={() => handleDelete(cartItem)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>

        </div>
        <div className="d-flex justify-content-between">
            <h5>Total price : ₹{Math.round(total)}.00</h5>
            <button className="btn btn-primary" onClick={handlePayment}>Continue</button>
        </div>
      </div>
    </div>
  );
}
