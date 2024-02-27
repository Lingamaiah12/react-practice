import { useState } from "react"


export function FormComponent(){

    const [name,setName] = useState('');
    const [colName,setColName] = useState(false);
    
    // function NameHandle(e){
    //     setName({
    //         NameHandle:e.target.value
    //     })
        
    // }

    function submitClick(){
       
        if(name.match(/^[A-Za-z]+$/)){
            setColName(true);
            setName('Valid Name');
        }
        else{
            setName('Invalid Name');
        }
            
    }

    return(
        <div className="container">
            <dl>
                <dt>Name</dt>
                <dd><input type="text"/></dd>
                <dd className={colName?'text-warning':'text-danger'}>{name}</dd>
                <dt>Password</dt>
                <dd><input type="password"/></dd>
                <button className="btn btn-primary" onClick={submitClick}>Submit</button>
            </dl>
            
        </div>
    )

}