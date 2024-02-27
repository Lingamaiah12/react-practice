
import { useState } from 'react';
import '../App.css';

export function Todo(){
    var [items,setItems] = useState();
    var [todoList,settodoList]=useState(
        
        [{
            id:1,
            item:'HTML'
        },
        {
            id:2,
            item:'Css'
        }
    ]);

    let nextId = 3

    function AddItems(){


        if(items == ''){
            alert('add items');
        }
        else{
           let newTodo =[
            ...items,
            {
                id:nextId++,
                item:items
            }
           ]

        
        settodoList(newTodo);
        
        console.log(newTodo);
        }

        
        
    }

    
    
    

    return(
        <>
        <div className="container m-4">
            <div className="input-group w-25">
                <input type="tex" className="form-control" onChange={(e)=>{
                
                        let task = e.target.value;
                        setItems(task)
                        
                }} value={items}/>
                <button className="btn btn-primary" onClick={()=>{
                    AddItems()
                }}>Add</button>
                
            </div>
            <ul className="list-group mt-1">
                {
                    todoList.map((data)=>{
                        return(
                            <li key={todoList.id} className='d-flex list-group-item w-25 justify-content-between'>
                                <p className="w-25">{data.item}</p>
                                <button className="btn btn-danger">Delete</button>
                            </li>
                            
                        )
                    })
                }

        
                
                
            </ul>
        </div>
        </>
    )
}