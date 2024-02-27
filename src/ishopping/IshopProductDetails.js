import axios from "axios"
import { useEffect, useState } from "react"
import { BrowserRouter, Link, useParams } from "react-router-dom"


export function IshopProductDetails(){
    const [product,setproducts] =useState([]);
    
    let prarams = useParams();
    console.log(product)
    useEffect(()=>{
        
        axios.get(`https://fakestoreapi.com/products/${prarams.id}`)
        .then(response=>
            setproducts(response.data))
    },[])
    
    function handleSubmit(){
        alert(`adding to cart ${prarams.id}`);
        
    }
    
    return(
        <div>
            <h1>Product details - {prarams.id}</h1>
            <div className="container d-flex flex-wrap">
            <div className="card w-25 mb-1">
                        <img className="card-img-top" height="140" src={product.image}/>
                        <div className="card-header overflow-auto" style={{height:'80px', overflow:"scroll"}}>
                            <p>{product.title}</p>
                        </div> 
                        <div className="card-body">
                            <dl>
                                <dt>Price</dt>
                                <dd>{product.price}</dd>
                                {/* <dt>Rating</dt> */}ṭ
                                {/* <dd>{product.rating.rate} <span className="bi bi-star-fill text-success"></span> [{product.rating.count}] </dd> */}
                                </dl>
                        </div>
                                 <div className="card-footer">
                                    <button className="btn btn-danger w-100">
                                        <span className="bi bi-cart4" onClick={handleSubmit}>Add to Cart</span> 
                                    </button>
                                    <button className="btn btn-link"><Link to={'/products/' +product.category} >Back</Link></button>
                                 </div>
   
            </div>
                </div>
        </div>
    )
}