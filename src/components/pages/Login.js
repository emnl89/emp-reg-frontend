import React, { useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthData } from '../../auth/Authwrapper';
import { KeyboardBackspaceRounded } from '@mui/icons-material';
import TodayRoundedIcon from '@mui/icons-material/TodayRounded';
import { InputBase, Paper } from '@mui/material';


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
                                }}/>
        </div>
        <div className='login-form'>
          <h1 className='heading'>Login</h1>
          <Paper
            component="form"
            sx={{ marginTop: '6%',
                  marginLeft: '12px',
                  p: '10px 4px',
                  display: 'flex',
                  width: 300,
                  borderRadius: '0px',
                  alignItems: 'center',
                  backgroundColor: '#c5e6f5' }}>
            <TodayRoundedIcon sx={{ml: 1}} htmlColor='#818283' /> 
            <InputBase
              id='date-input'
              placeholder='Date (yyyy-mm-dd)'
              type='text'
              //value={attendance.date}
              //onKeyDown={handleKeyPress}
              inputProps={{
                  "aria-readonly": 'true'
                  }}
              sx={{ flex: 1, marginLeft: '10px', fontSize: '18px' }}/>
          </Paper>          
        </div>
      </div>
    </div>
  )
}

export default Login

{/* <div className="page">
    <h2>Login Page</h2>
    <div className="inputs">
      <div className='input'>
        <input 
          //defaultValue={formData.userName} 
          onChange={(e) => 
            setFormData({userName: e.target.value})}
          type="text"
          />
        </div>
        <div className='input'>
          <input 
            //defaultValue={formData.password}
            onChange={(e) => 
              setFormData({password: e.target.value})}
            type='password'
          />
        </div>
        <div className='button'>
          <button onClick={doLogin}>Log in</button>
        </div>
        {errorMessage ?
          <div className='error'>{errorMessage}</div> : null 
        }
    </div>
  </div> */}