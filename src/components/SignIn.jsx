import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import TextField from '@mui/material/TextField';
import {    Button,Divider,     Typography } from '@mui/material';

import Form from 'muicss/lib/react/form';
import Container from 'muicss/lib/react/container';
import { containerStyle, formStyle } from './Styles';


function SignIn() {
    const [values, setValues] = useState({
        userName: '',
        password: ''
    });
    const [errors, setErrors] = useState({
        isUsernameInvalid: false ,
        isPasswordInvalid: false,
        errMsg: ''
    });
    const history = useHistory();


    const handleClick = () => {
        history.push('/signup-form')
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(values.userName.trim() === '' && values.password === ''){
            setErrors({
                isPasswordInvalid: true,
                isUsernameInvalid: true,
                errMsg: ''
            })
        }else if( values.userName.trim() === '' &&  values.password.length < 5 ) {
            setErrors({
                isPasswordInvalid: true,
                isUsernameInvalid: true,
                errMsg: 'Password must be greater than 5'
            })
        }else if( values.password === '' ) {
            setErrors({
                ...errors,
                isPasswordInvalid: true
            })
        }else if( values.password.length < 5 ) {
            setErrors({
                ...errors,
                isPasswordInvalid: true,
                errMsg: 'Password must be greater than 5'
            })
        }else if(values.userName === ''){
            setErrors({
                ...errors,
                isUsernameInvalid: true
            })
        }else{
            history.push('/signin-success')
            setValues({
                userName: '',
                password: ''
            })
            setErrors({
                isPasswordInvalid: false,
                isUsernameInvalid: false,
                errMsg: ''
            })
        }
    }

    const handleInputChange = (e) => {
        const {name,value} = e.target;
        setValues({
            ...values,
            [name] : value
        })
        console.log('After update',values.userName,values.password);
        setErrors({
            isPasswordInvalid: false,
            isUsernameInvalid: false
        })
    }

    return (
        <Container style={containerStyle}            
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            >
                <Typography variant='h4' color='#114239' align='center' margin='2vh auto 2vh auto'>  Sign in </Typography>
                <Form style={formStyle} onSubmit={handleSubmit} autocomplete="off">
                    <TextField 
                        error={errors.isUsernameInvalid}
                        label="Username" 
                        size="small" 
                        name='userName' 
                        type = 'text'
                        color="success"
                        style={{ marginTop: 11 }}
                        onChange={handleInputChange}/>
                    <TextField 
                        error={errors.isPasswordInvalid}
                        label="Password" 
                        size="small" 
                        name='password' 
                        type = 'password'
                        color="success"
                        style={{ marginTop: 11 }}
                        onChange={handleInputChange}/>
                    {errors.errMsg && <Typography fontSize='10px' color='red'> {`*${errors.errMsg}` }</Typography>}
                    <Button type="submit" variant='outlined' style={{ marginTop: 11 }} color='success' > 
                        <Typography color='#0c292a'> Log in </Typography>
                    </Button>
                    <Divider/>
                    <Typography align='center' color='black' margin='8vh auto 2vh auto' > Create a new account</Typography>
                    <Button onClick={handleClick}  variant='outlined' color='success' >
                        <Typography color='#0c292a'> Sign Up </Typography>
                    
                        </Button>  
                </Form>
        </Container>
    )
}

export default SignIn
