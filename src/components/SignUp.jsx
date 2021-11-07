import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import TextField from '@mui/material/TextField';
import {Button,Divider,Typography } from '@mui/material';

import Form from 'muicss/lib/react/form';
import Container from 'muicss/lib/react/container';
import { containerStyle, formStyle } from './Styles';


function SignUp() {
    const [values, setValues] = useState({
        userName: '',
        email: '',
        password: '',
        password2: '',
    });
    const [errors, setErrors] = useState({
        isUsernameInvalid: false ,
        isEmailInvalid: false ,
        isPasswordInvalid: false,
        isPassword2Invalid: false,
        errMsg: '',
    });
    const history = useHistory();


    const handleClick = () => {
        history.push('/login-form')
    }
    const handleSubmit = (e) => {
        console.log(values,errors);
        e.preventDefault();
        if(values.userName.trim() === ''){
            setErrors(  prevState => ({
                ...prevState,
                isUsernameInvalid: true,
                errMsg: 'Username is required',
            }))
            return
        }
        if(values.email.trim() === ''){
            setErrors( prevState => ({
                ...prevState,
                isEmailInvalid: true,
                errMsg: 'Email is required',
            }))
            return
        } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
            setErrors( prevState => ({
                ...prevState,
                isEmailInvalid: true,
                errMsg: 'Email address is invalid',
            }))
            return
        }
        if( (values.password === '' &&  values.password.length < 5 ) || values.password === '') {
            setErrors(prevState => ({
                ...prevState,
                isPasswordInvalid: true,
                errMsg: 'Enter a Password',
            }))
            return
        }else if( values.password.length < 5 ) {
            setErrors(prevState => ({
                ...prevState,
                isPasswordInvalid: true,
                errMsg: 'Password must be greater than 5',
            }))
            return
        }

        if( (values.password2 === '' &&  values.password2.length < 5 ) || values.password2 === '') {
            setErrors(prevState => ({
                ...prevState,
                isPassword2Invalid: true,
                errMsg: 'Enter a confirm Password',
            }))
            return
        }else if( values.password2.length < 5 ) {
            setErrors(prevState => ({
                ...prevState,
                isPassword2Invalid: true,
                errMsg: 'Password must be greater than 5',
            }))
            return
        }
        
        if(values.password !== values.password2){
            setErrors(prevState => ({
                ...prevState,
                isPassword2Invalid: true,
                errMsg: 'Password and Confirm password are not matching',
            }))
            return
        }

        history.push('/signup-success')
        setValues({
            userName: '',
            email: '',
            password: '',
            password2: ''
        })
        setErrors({
            isUsernameInvalid: false ,
            isEmailInvalid: false ,
            isPasswordInvalid: false,
            isPassword2Invalid: false,
            errMsg: '',
            isDataValid: true
        })
    }

    const handleInputChange = (e) => {
        const {name,value} = e.target;
        setValues({
            ...values,
            [name] : value
        })
        setErrors({
            isUsernameInvalid: false ,
            isEmailInvalid: false ,
            isPasswordInvalid: false,
            isPassword2Invalid: false,
            errMsg: '',
            isDataValid: true
        })
    }

    return (
        <Container style={containerStyle}            
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            >
                <Typography variant='h4' color='#114239' align='center' margin='2vh auto 2vh auto'>  Sign Up </Typography>
                <Form style={formStyle} onSubmit={handleSubmit}>
                    <TextField 
                        error={errors.isUsernameInvalid}
                        label="Username" 
                        size="small" 
                        name='userName' 
                        type = 'text'
                        style={{ marginTop: 11 }}
                        onChange={handleInputChange}/>
                    <TextField 
                        error={errors.isEmailInvalid}
                        label="Email" 
                        size="small" 
                        name='email' 
                        type = 'text'
                        style={{ marginTop: 11 }}
                        onChange={handleInputChange}/>
                    <TextField 
                        error={errors.isPasswordInvalid}
                        label="Password" 
                        size="small" 
                        name='password' 
                        type = 'password'
                        style={{ marginTop: 11 }}
                        onChange={handleInputChange}/>
                    <TextField 
                        error={errors.isPassword2Invalid}
                        label="Confirm Password" 
                        size="small" 
                        name='password2' 
                        type = 'password'
                        style={{ marginTop: 11 }}
                        onChange={handleInputChange}/> 
                    {errors.errMsg && <Typography fontSize='10px' color='red'> {`*${errors.errMsg}` }</Typography>}
                    <Button type="submit" variant='outlined' color='success'  style={{ marginTop: 11 }}> 
                    <Typography color='#0c292a'> Create </Typography>
                    </Button>
                    <Divider/>
                    <Typography color='black' align='center' margin='2vh auto 2vh auto'>  Already have an account</Typography>
                    <Button onClick={handleClick} variant='outlined' color='success' style={{ marginTop: 11 }}>
                    <Typography color='#0c292a'> Sign In </Typography>
                    </Button>  
                </Form>
        </Container>
    )
}

export default SignUp
