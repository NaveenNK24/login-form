import React from 'react'

import { Container,Button } from '@mui/material'
import { useHistory } from 'react-router'

function SignUpSuccess() {
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
                <h1> Account has been created Successfully </h1>

                <p>Click here to login</p>
                    
                    <Button onClick={handleLogout}> Log In</Button>
                

                
                                           
  
        </Container>
    )
}

export default SignUpSuccess
