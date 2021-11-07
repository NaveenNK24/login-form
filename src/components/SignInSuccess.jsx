import React from 'react'
import { useHistory } from 'react-router'

import { Container,Button, Typography, Divider } from '@mui/material'
import { containerStyle } from './Styles';


function SignInSuccess() {
    const history = useHistory();
    const handleLogout = () => {
        history.push('/login-form')
    }
    return (
        <Container style={containerStyle}
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            >
                <Typography variant='h4' color='#114239' align='center' margin='2vh auto 2vh auto'> Logged In Successful  </Typography>
                <Divider/>
                <Typography color='black' align='center' margin='2vh auto 2vh auto'> Click here to log out</Typography>
                <Button onClick={handleLogout}  variant='outlined' color='success' style={{ marginTop: 11 ,position : 'relative',align : 'center'}}>
                    <Typography color='#0c292a'> Log out </Typography>
                </Button>  
        </Container>
    )
}

export default SignInSuccess
