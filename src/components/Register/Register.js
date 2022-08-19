import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css';

const Register = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className='register-form'>
            <div>
                <h2>Create Account</h2>
                <form>
                    <input type="text" placeholder='Your Name' /><br />
                    <input type="email" placeholder='Your Email' /><br />
                    <input type="password" placeholder='Your Password' /><br />
                    <input type="password" placeholder='Re-enter Password' /><br /><br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account? <Link to='/login'>Login</Link></p>
                <p>--------or--------</p>
                <button onClick={signInUsingGoogle} className='btn-regular'>Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;