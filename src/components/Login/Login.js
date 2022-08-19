import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const navigate_uri = location.state?.from || '/shop';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            navigate(navigate_uri);
        })
    }
    return (
        <div className='login-form'>
            <div>
                <h2>Login</h2>
                <form>
                    <input type="email" placeholder='Your Email' /><br />
                    <input type="password" /><br />
                    <input type="submit" value="Submit" />
                </form>
                <p>new to ema-john? <Link to='/register'>Create Account</Link></p>
                <p>--------or--------</p>
                <button onClick={handleGoogleLogin} className='btn-regular'>Google Sign In
                </button>
            </div>

        </div>
    );
};

export default Login;