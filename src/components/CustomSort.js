import { useEffect, useState } from "react";



export function CustomSort(initial){
 
    const [sort ,setSort] = useState([]);

    useEffect(()=>{
        

        for(var i=0;i<initial.length;i++){
            for(var j=0;j<initial.length;j++){
                if(initial[i]<initial[j]){
                    const temp = initial[i];
                    initial[i] = initial[j];
                    initial[j] =temp;
                }
            }
        }


        var  sorted = initial 
        setSort(sorted)

    },[initial])

    return { sort }



}