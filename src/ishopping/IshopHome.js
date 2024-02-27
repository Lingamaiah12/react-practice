import { useNavigate } from "react-router-dom"



export default function IshopHome(){

    let navigate = useNavigate();
    function HandleRegisteruser(){
        navigate('/register');
    }
    function handleLoginUser(){ 
        navigate('/login');

    }


    return(
        <div>
            <h1>Shopping Home</h1>
            <button className="btn btn-link" onClick={HandleRegisteruser}>New Register</button>|
            <button className="btn btn-link" onClick={handleLoginUser}>Existing User</button>
        </div>
    )
}