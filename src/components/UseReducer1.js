import { useState,useReducer } from "react";
import iphone1 from '../Images/iphone1.webp'
import iphone2 from '../Images/iphone2.webp'
import iphone3 from '../Images/iphone3.webp'
import iphone4 from '../Images/iphone4.webp'
import iphone5 from '../Images/iphone5.webp'
import iphone6 from '../Images/iphone6.webp'

export default function MobileChange(){

    let [mobile,setMobile] =useState()
    return(
        <div className="row">
            <div className="col-2">
                <img src={iphone1} height={'60px'} width={'60px'} onClick={()=>{
                    mobile  = <img src={iphone1}/>
                    setMobile(mobile);
                }}/>
                <br/>
                <img src={iphone2} height={'60px'} width={'60px'} onClick={()=>{
                    mobile  = <img src={iphone2}/>
                    setMobile(mobile);
                }}/>
                <br/>
                <img src={iphone3} height={'60px'} width={'60px'} onClick={()=>{
                    mobile  = <img src={iphone3}/>
                    setMobile(mobile);
                }}/>
                <br/>
                <img src={iphone4} height={'60px'} width={'60px'} onClick={()=>{
                    mobile  = <img src={iphone4}/>
                    setMobile(mobile);
                }}/>
                <br/>
                <img src={iphone5} height={'60px'} width={'60px'} onClick={()=>{
                    mobile  = <img src={iphone5}/>
                    setMobile(mobile);
                }}/>
                <br/>
                <img src={iphone6} height={'60px'} width={'60px'} onClick={()=>{
                    mobile  = <img src={iphone6}/>
                    setMobile(mobile);
                }}/>
            </div>
            <div className="col-10">
                <span>{mobile}</span>
            </div>
        </div>
    )
}