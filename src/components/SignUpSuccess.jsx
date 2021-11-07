import React from 'react'

import { Container,Button, Typography, Divider } from '@mui/material'
import { useHistory } from 'react-router'
import { containerStyle } from './Styles';

function SignUpSuccess() {
    const history = useHistory();
    const handleLogin = () => {
        history.push('/login-form')
    }
    return (
        <Container style={containerStyle}
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            >
                <Typography variant='h4' color='#114239' align='center' margin='2vh auto 2vh auto'>  Account has been created Successfully </Typography>
                <Divider/>
                <Typography color='#114239' align='center' margin='2vh auto 2vh auto'>Click here to login
                <br/>
                <Button onClick={handleLogin} variant='outlined' align='center' color='success' style={{ marginTop: 11 }}>
                    <Typography color='#0c292a'> Log In</Typography>
                </Button>
                </Typography>
        </Container>
    )
}

export default SignUpSuccess
