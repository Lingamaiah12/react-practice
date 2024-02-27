import { useState } from "react"

export function TwowayBindingComponent(){
    const [product ,setProduct] = useState({Name:'',Price:0});
    const [Newproduct ,setNewProduct] = useState({Name:'',Price:0});
    function handleName(e){
        
        
        setProduct({
            Name : e.target.value,
            Price : product.Price
        })
    }
    function handlePrice(e){
        setProduct({
            Name : product.Name,
            Price:e.target.value
        })
    }
    function registerClick(){
        
        setNewProduct(product)

    }
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <h2>Register Product</h2>
                </div>
                <div>
                    <dl>
                        <dt>Name</dt>
                        <dd><input type="text" onChange={handleName}></input></dd>
                        <dt>Price</dt>
                        <dd><input type="text"  onChange={handlePrice}></input></dd>
                        <button className="btn btn-primary" onClick={registerClick}>Submit</button>
                    </dl>
                    
                </div>
                <div className="col-9">
                    <h1>Product Details</h1>
                    <dl>
                        <dt>Name</dt>
                        <dd>{Newproduct.Name}</dd>
                        <dt>Price</dt>
                        <dd>{Newproduct.Price}</dd>
                    </dl>
                </div>
            </div>
        </div>
    )

}