import React, { useState } from 'react';

export function UseState() {

  const [product, setProduct] = useState({Name:'',Price:0});

  return (
    <>
    <h5>Name</h5>
    <input type='text' id='name'/>
    <h5>{product.Name}</h5>
    <h5>Price</h5>
    <input type='text' id='price'/>
    <h5>{product.Price}</h5> 
    <button onClick={()=>{
            var name = document.getElementById('name').value
            var price = document.getElementById('price').value
      setProduct({
        Name:name,
        Price:price,
      })
    }}>Submit</button>
    </>
  );
}
