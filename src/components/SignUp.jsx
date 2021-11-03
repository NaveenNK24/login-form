import React from 'react'
import { useHistory } from 'react-router-dom';

function SignUp() {
    const history = useHistory();
    const handleClick = () => {
        history.push('/login-form')
    }
    return (
        <div>
        
            <h1>Sign Up</h1>
            
            <p>Already Have an account</p>
            <button onClick={handleClick}>Log in</button>
        </div>
    )
}

export default SignUp
