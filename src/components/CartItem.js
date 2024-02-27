import axios from "axios";
import { useEffect, useState } from "react";

export default function CartItem() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      });
  }, []);

  function handleCartItem(item){
    setCart([...cart, item]);
    setTotal(total + item.price);  // Use item.price instead of cart.price
    alert(`${item.title} added to the cart`);
  }

  function handleDelete(cartItem) {
    setCart(cart.filter(item => item.id !== cartItem.id));
    setTotal(total - cartItem.price);  // Subtract the deleted item's price from the total
  }

  function handleIncrement(cartItem){
    const updatedCart = cart.map(item => item.id == cartItem.id ? {...item,quantity:item.quantity+1}: item);
    setCart(updatedCart);
    setTotal(total + cartItem.price);
  }
  
  function handleDecrement(){

  }
  return (
    <div className="row m-2">
      <div className="container d-flex flex-wrap col-7">
        {products.map(item => (
          <div className="card m-2 w-25" key={item.id}>
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
      <div className="col-5">
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
                <td className="d-flex flex-wrap">
                    <button onClick={()=>handleDecrement(cartItem)}>-</button>
                    <span>{cartItem.quantity}</span>
                    <button onClick={()=>handleIncrement(cartItem)}>+</button>
                </td>
                <td>{cartItem.price}</td>
                <td><button className="btn btn-danger" onClick={() => handleDelete(cartItem)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <h5>Total price : ${total}</h5>
      </div>
    </div>
  )}