import axios from "axios";
import { useFormik } from "formik";
import { BrowserRouter,Link, useNavigate } from "react-router-dom"

export default function IshopRegister(){

    let navigate = useNavigate();

    const formik = useFormik({
        initialValues:{
            UserName :'',
            Password:'',
            Age:0,
            Mobile:'',
            City:'',
            Subscribe:false
        },
    
        onSubmit: values=>{
            axios.post('http://localhost:3000/posts',values);
            alert('Register Successfully...')
            navigate('/login')
            
        }
    })

    return(
        <div className="container">
            <form onSubmit={formik.handleSubmit}>
                <h2>Register User</h2>
                <dl>
                    <dt>Name</dt>
                    <dd><input name="UserName" value={formik.values.UserName} onChange={formik.handleChange} type="text"/></dd>
                    <dt>Password</dt>
                    <dd><input name="Password" value={formik.values.Password} onChange={formik.handleChange} type="password"/></dd>
                    <dt>Age</dt>
                    <dd><input name="Age" value={formik.values.Age} onChange={formik.handleChange} type="number"/></dd>
                    <dt>Mobile</dt>
                    <dd><input name="Mobile" value={formik.values.Mobile} onChange={formik.handleChange} type="number"/></dd>
                    <dt>City</dt>
                    <dd >
                        <select name="City" value={formik.values.City} onChange={formik.handleChange}>
                            <option>Select City</option>
                            <option>Hyd</option>
                            <option>Bang</option>
                        </select>
                    </dd>
                    <dt>Subscribe</dt>
                    <dd className="form-switch"><input className="form-check-input" name="Subscribe" checked={formik.values.Subscribe} onChange={formik.handleChange} type="checkbox"/>Yes</dd>
                    
                    <button className="btn btn-primary">Submit</button>
                </dl>
                <dd><Link to='/login' className='btn btn-link'>Already have account</Link></dd>
            </form>
            </div>
            )
}