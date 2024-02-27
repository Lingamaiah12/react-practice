import { useReducer, useState } from "react";

var intialState = {like:0,dislike:0};

function reducer(state,action){
    switch(action.type){
        case 'like':
            return {like: parseInt(state.like)+1 , dislike:state.dislike}
    
        case 'dislike':
        
            return {dislike: parseInt(state.dislike)+1 , like:state.like};
        }
}

export function UseReducer(){

    var [con,dispatch] = useReducer(reducer,intialState)


    function LikeBtn(){
        dispatch({type:'like'})

    }

    function DisLikeBtn(){

        dispatch({type:'dislike'})

    }
    


    return(
        <div className="container">
            <h1>DisLike - {con.dislike}</h1>
            <button onClick={DisLikeBtn}>DisLike</button>
            <h1>Like - {con.like}</h1>
            <button onClick={LikeBtn}>Like</button>
            
        </div>
    )
}