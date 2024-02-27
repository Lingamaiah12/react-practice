import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegistrationBtn = () => {
    const navigate  = useNavigate()
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        mobileNumber: ''
    });
    const [newProducts, setNewProducts] = useState([]);
    const [errPassword, setErrPassword] = useState('');

    const handleName = (e) => {
        setUserDetails({ ...userDetails, name: e.target.value });
    }

    const handleEmail = (e) => {
        setUserDetails({ ...userDetails, email: e.target.value });
    }

    const handlePassword = (e) => {
        setUserDetails({ ...userDetails, password: e.target.value });
    }

    const handleConfirmPassword = (e) => {
        setUserDetails({ ...userDetails, confirmPassword: e.target.value });
    }

    const handleMobileNumber = (e) => {
        setUserDetails({ ...userDetails, mobileNumber: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userDetails.password !== userDetails.confirmPassword) {
            setErrPassword('Passwords do not match');
        } else {
            setErrPassword('');
            const details = [...newProducts, userDetails];
            setNewProducts(details);
            localStorage.setItem('details', JSON.stringify([...details]));
            navigate('/login')
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center">
            <form className="align-item-center">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" placeholder="Enter Name" onChange={handleName} value={userDetails.name} />

            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Enter Email" onChange={handleEmail} value={userDetails.email} />

            <label className="form-label">Mobile Number</label>
            <input type="text" className="form-control" placeholder="Enter number" onChange={handleMobileNumber} value={userDetails.mobileNumber} />

            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Enter password" onChange={handlePassword} value={userDetails.password} />

            <label className="form-label">Confirm Password</label>
            <input type="password" className="form-control" placeholder="Confirm password" onChange={handleConfirmPassword} value={userDetails.confirmPassword} />

            {errPassword && <p className="text-danger">{errPassword}</p>}

            <button type="submit" className="btn btn-primary w-100 mt-2" onClick={handleSubmit}>Submit</button>
        </form>
        </div>
    );
}

export default RegistrationBtn;
