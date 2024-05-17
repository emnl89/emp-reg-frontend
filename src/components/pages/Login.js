import React, { useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthData } from '../../auth/Authwrapper';
import { KeyboardBackspaceRounded } from '@mui/icons-material';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import FingerprintRoundedIcon from '@mui/icons-material/FingerprintRounded';
import { Button, InputBase, Paper, ThemeProvider, createTheme } from '@mui/material';


const Login = () => {

    const navigate = useNavigate();
    const { login } = AuthData();
    const [formData, setFormData] = useReducer((formData, newItem) => {
        return ({ ...formData, ...newItem });
    })
    const [ errorMessage, setErrorMessage ] = useState(null);

    const doLogin = async () => {
        try {
            await login(formData.userName, formData.password)
            navigate("/account")
        } catch (error) {
            setErrorMessage(error);
        }
    }

    const goBack = () => {
      navigate(-1);
    }

    const theme = createTheme({
      palette: {
        primary: {
          main: '#11636f',
        },
      },
    });

    const handleKeyPress = (event) => {
      if(event.key === 'Enter'){
          event.preventDefault();
      }
  }

  return (
    <div className="login">
      <div className='form-container'>
        <div className='image-container'>
          
          <KeyboardBackspaceRounded 
                            htmlColor='#818283'
                            style={{ position: 'absolute',
                                    top: '30px',
                                    left: '30px',
                                    fontSize: '40px',   
                                }}
                            onClick={goBack}/>
        
        </div>
        <div className='login-form'>
          <h1 className='heading'>Login</h1>
          
          <Paper
            component="form"
            sx={{ marginTop: '50px',
                  marginLeft: '12px',
                  p: '10px 4px',
                  display: 'flex',
                  width: 300,
                  borderRadius: '0px',
                  alignItems: 'center',
                  backgroundColor: '#0da5b0' }}>
            
            <PersonRoundedIcon sx={{ml: 1}} htmlColor='#fffff' /> 
            
            <InputBase
              id='userName'
              placeholder='Enter User Name'
              type='text'
              onChange={(event) => {
                setFormData({userName: event.target.value})
              }}
              onKeyDown={handleKeyPress}
              sx={{ flex: 1, marginLeft: '10px', fontSize: '18px' }}/>
          </Paper>
          
          <Paper
            component="form"
            sx={{ marginTop: '6%',
                  marginLeft: '12px',
                  p: '10px 4px',
                  display: 'flex',
                  width: 300,
                  borderRadius: '0px',
                  alignItems: 'center',
                  backgroundColor: '#0da5b0' }}>
            
            <FingerprintRoundedIcon sx={{ml: 1}} htmlColor='#fffff' /> 
            
            <InputBase
              id='password'
              placeholder='Enter Password'
              type='password'
              onChange={(event) => {
                setFormData({password: event.target.value})
              }}
              onKeyDown={handleKeyPress}
              sx={{ flex: 1, marginLeft: '10px', fontSize: '18px' }}/>
          </Paper>
          
          <ThemeProvider theme={theme}>
            <Button variant='contained'  
                    style={{ fontSize: '20px',
                              width: 310,
                              borderRadius: '0px',
                              marginLeft: '12px',
                              marginTop: '70px'
                            }}
                    onClick={doLogin}
                    >
                        Submit</Button>
          </ThemeProvider>
          
          {errorMessage ? <div className='error-message'>{errorMessage}</div> : null}          

          <a href='/signup'>Create a new Account</a>

        </div>
      </div>
    </div>
  )
}

export default Login