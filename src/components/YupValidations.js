import * as yup  from 'yup';
import { useFormik,Formik,Field,Form ,ErrorMessage } from 'formik';

export default function YupValidations(){

    return(
        <div className='container'>
            <h2>Register Form</h2>
            <Formik initialValues={
                {
                    UserName :'',
                    Age:'',
                    City:''
                }
            }
            validationSchema={
                yup.object({
                    UserName:yup.string().min(4,'Name is too short').max(10,'Name is too long').required('name is required'),
                    Age:yup.number().required('Age required'),
                    City:yup.string().required('City is required')
                })
            }
            onSubmit={
                values=>{
                    alert(JSON.stringify(values));
                }
            }>
                {
                    prop=>
                        <Form>
                    {
                        <dl>
                            <dt>Name</dt>
                            <dd><Field type='text' name='UserName'></Field></dd>
                            <dd className='text-danger'>
                            <ErrorMessage name='UserName'></ErrorMessage>
                            </dd>
                            <dt>Age</dt>
                            <dd><Field type='number' name='Age'></Field></dd>
                            <dd className='text-danger'>
                            <ErrorMessage name='Age'></ErrorMessage>
                            </dd>
                            <dt>Select City</dt>
                            <dd>
                                <Field as='select' name='City'>
                                    <option>Select City</option>
                                    <option>Hyd</option>
                                    <option>Bang</option>
                                </Field>
                            </dd>
                            <dd className='text-danger'>
                            <ErrorMessage name='City'></ErrorMessage>
                            </dd>
                            <button disabled={(prop.isValid)?false:true}>Submit</button>
                        </dl>
                    }
                </Form>
                    }
                
            </Formik>
        </div>
    )

}