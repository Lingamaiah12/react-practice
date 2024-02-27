import React, { useContext } from "react";
import { AppContext } from "./Home";
import { context } from "./Home";
const Products = () => {
  const data = useContext(context);

  return (
    <>
      <h1>Product</h1>
      <h1>hello - {data}</h1> 
    </>
  );
}

export default Products;