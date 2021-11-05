import React from 'react'

import { Container,Button } from '@mui/material'
import { useHistory } from 'react-router'

function SignInSuccess() {
    const history = useHistory();
    const handleLogout = () => {
        history.push('/login-form')
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
                <h1> Logged In Successful </h1>
                    
                    <Button onClick={handleLogout}> Log out</Button>
                

                
                                           
  
        </Container>
    )
}

export default SignInSuccess
