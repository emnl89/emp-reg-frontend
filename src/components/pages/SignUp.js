import { KeyboardBackspaceRounded } from '@mui/icons-material';
import { Button, InputBase, Paper, ThemeProvider, createTheme } from '@mui/material';
import React, { useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import FingerprintRoundedIcon from '@mui/icons-material/FingerprintRounded';
import api from '../../api/AxiosConfig';

const SignUp = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useReducer((formData, newItem) => {
    return ({ ...formData, ...newItem });
  })
  const [ error, setError ] = useState(null);


  const handleConfirmPasswordChange = (event) => {
    const confirmPassword = event.target.value;
    setFormData({ password: confirmPassword });
    if (formData.password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      setError('');
    }
  };

  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
        event.preventDefault();
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const jsonData = JSON.stringify(formData);
    console.log(jsonData);
    try {
      const response = await api.post("", {jsonData})
      console.log(response)
    } catch (error) {
      console.log(error)
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

  return (
    <div className="signup">
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
        <div className='edit-form'>
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
              id='confirm-password'
              placeholder='Confirm Password'
              type='password'
              onChange={handleConfirmPasswordChange}
              onKeyDown={handleKeyPress}
              sx={{ flex: 1, marginLeft: '10px', fontSize: '18px' }}/>
          </Paper>

          {error === '' ? <div className='error-message'>{error}</div> : null}  
          
          <ThemeProvider theme={theme}>
            <Button variant='contained'  
                    style={{ fontSize: '20px',
                              width: 310,
                              borderRadius: '0px',
                              marginLeft: '12px',
                              marginTop: '70px'
                            }}
                    onClick={handleSubmit}
                    >
                        Submit</Button>
          </ThemeProvider>
                  

          <a href='/signup'>Create a new Account</a>

        </div>
      </div>
    </div>
  )
}

export default SignUp