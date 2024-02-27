
import './NetflixHeaderComponent.css'

export function NetflixHeaderComponent(){

    return(
        <>
        <div className='header d-flex justify-content-between m-3 p-3'>
            <div>
            <h1 className='text-danger'>Netflix</h1>
            </div>
            <div className='input-group w-25'>
                <select className='form-select w-25'>
                    <option>English</option>
                    <option>Hindi</option>
                </select>
                <button className='btn btn-danger'>Sign In</button>
            </div>
        </div>
       

        </>
    )
    
}