import React, { useEffect, useState } from 'react'
import api from '../../api/AxiosConfig';
import { Button, InputBase, Paper, ThemeProvider, createTheme } from '@mui/material';
import { KeyboardBackspaceRounded } from '@mui/icons-material';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import EngineeringRoundedIcon from '@mui/icons-material/EngineeringRounded';
import MoreTimeRoundedIcon from '@mui/icons-material/MoreTimeRounded';
import SavingsRoundedIcon from '@mui/icons-material/SavingsRounded';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {

    const navigate = useNavigate();
    const [employee, setEmployee] = useState({
        empId: 0,
        name: "",
        wageRate: 0,
        overtimeRate: 0,
        dueAmount: 0
    });

    const goBack = () => {
        navigate(-1);
    }

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            event.preventDefault();
        }
    }

    const handleChange = (event) => {
        const {id, value} = event.target;
        setEmployee({...employee, [id]: value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const jsonData = JSON.stringify(employee);
        console.log(jsonData);

        try {
            const response = await api.post("", {jsonData})
            console.log(response)

        } catch (error) {
            console.log(error);
        }
    }

    const theme = createTheme({
        palette: {
          primary: {
            main: '#44b386',
          },
        },
      });

    return (
        <div className='add-emp-page'>
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
                    
                    <h1 className='heading'>Create Employee</h1>

                    <Paper
                        component="form"
                        sx={{
                            marginTop: '6%',
                            marginLeft: '12px',
                            p: '10px 4px',
                            display: 'flex',
                            width: 350,
                            borderRadius: '30px',
                            alignItems: 'center',
                            backgroundColor: '#c2f3dd'
                        }}
                        >
                        <BadgeRoundedIcon sx={{ml: 1}} htmlColor='#818283' /> 
                        <InputBase
                            id='empId'
                            placeholder='Employee ID'
                            type='number'
                            onKeyDown={handleKeyPress}
                            onChange={handleChange}
                            sx={{ flex: 1, 
                                  marginLeft: '10px', 
                                  fontSize: '18px',
                                  "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": { display: "none" },
                                  "& input[type=number]": { MozAppearance: "inputbase" } 
                                }} />
                    </Paper>

                    <Paper
                        component="form"
                        sx={{
                            marginTop: '12px',
                            marginLeft: '12px',
                            p: '10px 4px',
                            display: 'flex',
                            width: 350,
                            borderRadius: '30px',
                            alignItems: 'center',
                            backgroundColor: '#c2f3dd'
                        }}
                        >
                        <AccountCircleRoundedIcon sx={{ml: 1}} htmlColor='#818283' /> 
                        <InputBase
                            id='name'
                            sx={{ 
                                flex: 1, 
                                marginLeft: '10px', 
                                fontSize: '18px', 
                            }}
                            placeholder='Name'
                            type='text'
                            onKeyDown={handleKeyPress}
                            onChange={handleChange}
                        />
                    </Paper>

                    <Paper
                        component="form"
                        sx={{
                            marginTop: '12px',
                            marginLeft: '12px',
                            p: '10px 4px',
                            display: 'flex',
                            width: 350,
                            borderRadius: '30px',
                            alignItems: 'center',
                            backgroundColor: '#c2f3dd'
                        }}
                        >
                        <EngineeringRoundedIcon sx={{ml: 1}} htmlColor='#818283' /> 
                        <InputBase
                            id='wageRate'
                            sx={{ 
                                flex: 1, 
                                marginLeft: '10px', 
                                fontSize: '18px',
                                "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": { display: "none" },
                                "& input[type=number]": { MozAppearance: "inputbase" } 
                            }}
                            placeholder='Wage Rate'
                            type='number'
                            onKeyDown={handleKeyPress}
                            onChange={handleChange}
                        />
                    </Paper>
                    
                    <Paper
                        component="form"
                        sx={{
                            marginTop: '12px',
                            marginLeft: '12px',
                            p: '10px 4px',
                            display: 'flex',
                            width: 350,
                            borderRadius: '30px',
                            alignItems: 'center',
                            backgroundColor: '#c2f3dd'
                        }}
                        >
                        <MoreTimeRoundedIcon sx={{ml: 1}} htmlColor='#818283' /> 
                        <InputBase
                            id='overtimeRate'
                            sx={{ 
                                flex: 1, 
                                marginLeft: '10px', 
                                fontSize: '18px',
                                "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": { display: "none" },
                                "& input[type=number]": { MozAppearance: "inputbase" } 
                            }}
                            placeholder='Overtime Rate'
                            type='number'
                            onKeyDown={handleKeyPress}
                            onChange={handleChange}
                        />
                    </Paper>

                    <Paper
                        component="form"
                        sx={{
                            marginTop: '12px',
                            marginLeft: '12px',
                            p: '10px 4px',
                            display: 'flex',
                            width: 350,
                            borderRadius: '30px',
                            alignItems: 'center',
                            backgroundColor: '#c2f3dd'
                        }}
                        >
                        <SavingsRoundedIcon sx={{ml: 1}} htmlColor='#818283' /> 
                        <InputBase
                            id='dueAmount'
                            sx={{ 
                                flex: 1, 
                                marginLeft: '10px', 
                                fontSize: '18px',
                                "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": { display: "none" },
                                "& input[type=number]": { MozAppearance: "inputbase" } 
                            }}
                            placeholder='Due Amount'
                            type='number'
                            onKeyDown={handleKeyPress}
                            onChange={handleChange}
                        />
                    </Paper>

                    <ThemeProvider theme={theme}>
                        <Button variant='contained'  
                                style={{ fontSize: '20px',
                                         width: 350,
                                         borderRadius: '30px',
                                         marginLeft: '12px',
                                         marginTop: '40px'
                                        }}
                                onClick={handleSubmit}>
                                    Submit</Button>
                    </ThemeProvider>

                </div>
            
            </div>
        </div>
    )
}

export default AddEmployee;