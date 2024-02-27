import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../Shopper/product.css';
import CartItems from "./cartItems";

const Items = ({ logged }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [seemore, setSeemore] = useState('');

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      });
  }, []);

  function handleAddToCart(item) {
    const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity++;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  
    if (!logged) {
      setSeemore('/login');
    }
  }

  const handleIncrement = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity++;
    setCart(updatedCart);
  };

  const handleDecrease = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity--;
      setCart(updatedCart);
    }
  };

  const handleDelete = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };
  
  return (
    <div className="product">
      <div className="row">
        {products.map(item => (
          <div className="col-md-4 col-sm-6 mt-3" key={item.id}>
            <div className="card cart">
              <img className="card-img-top" height="140" src={item.image} alt={item.title} />
              <div className="card-header overflow-auto" style={{ height: '100px', overflow: "scroll" }}>
                <h5>{item.title}</h5>
              </div>
              <div className="card-body">
                <dl>
                  <dt>Price</dt>
                  <b><dd>&#8377; {item.price}</dd></b>
                  <dt>Rating</dt>
                  <dd>{item.rating.rate} <span className="bi bi-star-fill text-success"></span> [{item.rating.count}] </dd>
                </dl>
              </div>
              <div className="card-footer">
                <Link to={seemore}>
                  <button className="btn btn-danger w-100" onClick={() => handleAddToCart(item)}>
                    <span className="bi bi-cart4">Add to Cart</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="col-md-4 col-sm-12 ms-4 cartItems">
        <div className="cart-items">
          <h1>Cart Items</h1>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Prev</th>
                <th scope="col">Price</th>
                <th scope="col"></th>
                <th scope="col">Qty</th>
                <th scope="col"></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((ele, index) => (
                <tr key={index}>
                  <td>
                    <img src={ele.image} style={{ height: '40px', width: '40px' }} />
                  </td>
                  <td>{ele.price}</td>
                  <td><button onClick={() => handleDecrease(index)}>-</button></td>
                  <td>{ele.quantity}</td>
                  <td><button onClick={() => handleIncrement(index)}>+</button></td>
                  <td><button className="bi bi-trash" onClick={() => handleDelete(index)}>Delete</button></td>

                </tr>
              ))}
            </tbody>
          </table>
          <div className="ms-2"><h5>Total price: {cart.reduce((acc, ele) => acc + ele.price * ele.quantity, 0).toFixed(2)}</h5></div>
        </div>
      </div>
    </div>
  );
}

export default Items;
