import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import TextField from '@mui/material/TextField';
import {    Button,Divider,     Typography } from '@mui/material';

import Form from 'muicss/lib/react/form';
import Container from 'muicss/lib/react/container';


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

    const formStyle = {
        display: 'flex',
        flexDirection : 'column',
        alignItems : 'center'
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
        <Container style={{ width: '70vw',
            height : '70vh',
            marginTop: '13vh',
            marginLeft: '13vw',
            border: '1px solid red',
            position : 'fixed'}}
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            >
                <Typography variant='h4' align='center' margin='2vh auto 2vh auto'>  Sign in </Typography>
                <Form style={formStyle} onSubmit={handleSubmit}>
                    <TextField 
                        error={errors.isUsernameInvalid}
                        label="Username" 
                        size="small" 
                        name='userName' 
                        type = 'text'
                        onChange={handleInputChange}/>
                    <TextField 
                        error={errors.isPasswordInvalid}
                        label="Password" 
                        size="small" 
                        name='password' 
                        type = 'password'
                        onChange={handleInputChange}/>
                    {errors.errMsg && <Typography fontSize='10px' color='red'> {`*${errors.errMsg}` }</Typography>}
                    <Button type="submit" variant='contained'> Log in</Button>
                    <Divider/>
                    <Typography align='center' margin='8vh auto 2vh auto'> Create a new account</Typography>
                    <Button onClick={handleClick} variant='contained' outline='none'>Sign Up</Button>  
                </Form>
        </Container>
    )
}

export default SignIn
