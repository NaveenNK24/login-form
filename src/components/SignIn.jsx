import React from 'react'
import {useHistory} from 'react-router-dom'
import TextField from '@mui/material/TextField';
import { Button, Container,  Paper } from '@mui/material';




function SignIn() {
    const history = useHistory();
    const handleClick = () => {
        history.push('/signup-form')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const paperStyle = {
        padding: '10px',
        height : '70vh',
        margin : '20px auto'
    }

    return (

        <Container style={{ backgroundColor :'linear-gradient(135deg,#409fee,#0af0f0)'}}>

<Paper elevation={10} style={paperStyle} noValidate>
               Sign in
        <form onSubmit={handleSubmit}>
                    <TextField marginTop='20px' label="User Name" size="small"/>  
                    <TextField label="Password" size="small" padding='10px'/>  
                    <Button type="submit" variant='contained'> Log in</Button>
                </form>         
            

             <div>
                     <p>Create a new account </p>
                     <Button onClick={handleClick} variant='contained' outline='none'>Sign Up</Button>             
                 </div>
             </Paper>
  
        </Container>
    )
}

export default SignIn
