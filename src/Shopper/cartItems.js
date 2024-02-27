import React from "react";

const CartItems = ({title,price,image}) => {


  return (
    <>
      <div>
        <div>
          <img src={image}/>
        </div>
      </div>
    </>
  );
}

export default CartItems;
