import React from 'react'

import { Container,Button, Typography } from '@mui/material'
import { useHistory } from 'react-router'

function SignUpSuccess() {
    const history = useHistory();
    const handleLogin = () => {
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
                <Typography variant='h4' color='#114239' align='center' margin='2vh auto 2vh auto'>  Account has been created Successfully </Typography>
                <Typography>Click here to login</Typography>
                <Button onClick={handleLogin} variant='outlined' color='success' style={{ marginTop: 11 }}>
                    <Typography color='#0c292a'> Log In</Typography>
                </Button>
        </Container>
    )
}

export default SignUpSuccess
