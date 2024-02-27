import { useEffect } from "react";
import { useState } from "react"

export function ShoppingBody(){

    const [categories,setCategories] = useState([]);
    const [products,setProducts] = useState([]);

    
    fetch('https://fakestoreapi.com/products/categories')
    .then(response => response.json())
    .then(data =>{
            setCategories(data)
        })
    
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data =>{
                setProducts(data)
            })

    

    // useEffect(()=>{
    //     LoadCategory()
    // },[])

    return(
        <>

        <div className="card-container">
            <div className="col-3">
            <select className="form-select w-25 m-2"> 
            {
            categories.map(items=>
                <option key={items}>{items}</option>
            )
            }
        </select>
            </div>
            <div className="col-9 d-flex flex-wrap">
                {
                    products.map(product=>
                        <div className="card w-25">
                            <div className="card-header" style={{height:'50px', overflow:"scroll"}}>
                            <div>{product.title}</div>
                            </div>
                            <div className="card-body ">
                            <img src={product.image} height={150} width={150}/>
                            </div>
                        </div>

                        
                        )
                }
            </div>
        </div>

        </>
    )
}