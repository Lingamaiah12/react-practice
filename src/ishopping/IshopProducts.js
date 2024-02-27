import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";



export function IshopProducts() {
  const [category, setCategory] = useState();
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  let params = useParams();

  useEffect(() => {
    setCategory(params.category);
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      });
  }, [params.category]);

  function handleAddToCart(item) {
    setCart([...cart, item]);
    alert(`${item.title} added to the cart`);
  }

  return (
    <>
      <h1>{params.category} Details</h1>
      <Link to='/dashboard'>Go back</Link>
      <div className="container d-flex flex-wrap">
        {products
          .filter(item => item.category === category)
          .map(item => (
            <div className="card w-25 me-4 mb-4" key={item.id}>
              <img className="card-img-top" height="140" src={item.image} alt={item.title} />
              <div className="card-header overflow-auto" style={{ height: '100px', overflow: "scroll" }}>
                <p><Link to={'/details/' + item.id}>{item.title}</Link></p>
              </div>
              <div className="card-body">
                <dl>
                  <dt>Price</dt>
                  <dd>{item.price}</dd>
                  <dt>Rating</dt>
                  <dd>{item.rating.rate} <span className="bi bi-star-fill text-success"></span> [{item.rating.count}] </dd>
                </dl>
              </div>
              <div className="card-footer">
                <button className="btn btn-danger w-100" onClick={() => handleAddToCart(item)}>
                  <span className="bi bi-cart4">Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
      </div>
          
      
    </>
  );
}
