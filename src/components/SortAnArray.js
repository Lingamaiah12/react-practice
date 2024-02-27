
import { CustomSort } from "./CustomSort";

export function SortAnArray(){

    var initial =[78,10,5,6,88,49];
    const [sorty] = CustomSort([initial]);
    return(
        <>
        {
            sorty.map((item,ind)=>{
                <li>{item}</li>
            })
        }
        </>
    )
}

