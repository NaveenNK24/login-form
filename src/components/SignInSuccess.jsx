import React from 'react'
import { useHistory } from 'react-router'

import { Container,Button, Typography } from '@mui/material'


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
            border: '0px solid black',
            borderRadius : '10px',
            position : 'fixed',
            boxShadow: '-1rem 0 3rem #24ae9e'
            }}
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            >
                <Typography variant='h4' color='#114239' align='center' margin='2vh auto 2vh auto'> Logged In Successful  </Typography>
                <Button onClick={handleLogout} variant='outlined' color='success' style={{ marginTop: 11 }}>
                    <Typography color='#0c292a'> Log out </Typography>
                </Button>  
        </Container>
    )
}

export default SignInSuccess
