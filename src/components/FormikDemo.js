import { Formik, useFormik } from "formik";

export default function FormikDemo(){

    const formik = useFormik({
        initialValues:{
            UserName :'',
            Password:'',
            Age:0,
            City:'',
            Subscribe:false
        },
        onSubmit: values=>{
            alert(JSON.stringify(values));
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
                    <dt>City</dt>
                    <dd >
                        <select name="City" value={formik.values.City} onChange={formik.handleChange}>
                            <option>Hyd</option>
                            <option>Bang</option>
                        </select>
                    </dd>
                    <dt>Subscribe</dt>
                    <dd className="form-switch"><input className="form-check-input" name="Subscribe" checked={formik.values.Subscribe} onChange={formik.handleChange} type="checkbox"/>Yes</dd>
                    
                    <button>Submit</button>
                </dl>
            </form>
            {/* <h1>User details</h1>
            <dl>
                <dt>Name</dt>
                <dd>{formik.values.UserName}</dd>
                <dt>Password</dt>
                <dd>{formik.values.Password}</dd>
                <dt>Age</dt>
                <dd>{formik.values.Age}</dd>
                <dt>City</dt>
                <dd>{formik.values.City}</dd>
            </dl> */}
        </div>
    )
}