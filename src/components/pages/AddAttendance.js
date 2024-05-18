import React, { useEffect, useState } from 'react'
import api from '../../api/AxiosConfig';
import { Button, InputBase, Paper, ThemeProvider, createTheme } from '@mui/material';
import { KeyboardBackspaceRounded } from '@mui/icons-material';
import TodayRoundedIcon from '@mui/icons-material/TodayRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import MoreTimeRoundedIcon from '@mui/icons-material/MoreTimeRounded';
import MoneyRoundedIcon from '@mui/icons-material/MoneyRounded';
import { useNavigate } from 'react-router-dom';

const AddAttendance = () => {

    const urlParams = new URLSearchParams(window.location.search);
    const date = urlParams.get("date");
    const navigate = useNavigate();
    const [attendance, setAttendance] = useState({
        date: date,
        attId: 0,
        work: 5,
        overtime: 4,
        advance: 1000
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
        setAttendance({...attendance, [id]: value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const jsonData = JSON.stringify(attendance);
        console.log(jsonData);

        try {
            const response = await api.post("", {jsonData})
            console.log(response)

        } catch (error) {
            console.log(error);
        }
    }

    const getAttendance = async () => {
        try {
            
            const response = await api.get(`/api/v2/attendance/${id}`);
            console.log(response.status);
            setAttendance(response.data);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAttendance();
    }, []);

    const theme = createTheme({
        palette: {
          primary: {
            main: '#44b386',
          },
        },
      });

    return (
        <div className='update-att-page'>
            <div className='form-container'>
                
                <div className='image-container'>
                        <KeyboardBackspaceRounded 
                            htmlColor='#818283'
                            style={{ position: 'absolute',
                                    top: '30px',
                                    left: '30px',
                                    fontSize: '40px',   
                                }}
                            onClick={goBack}
                        />
                </div>
                
                <div className='edit-form'>
                    
                    <h1 className='heading'>Edit Attendance</h1>

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
                        <TodayRoundedIcon sx={{ml: 1}} htmlColor='#818283' /> 
                        <InputBase
                            id='date-input'
                            placeholder='Date (yyyy-mm-dd)'
                            type='text'
                            value={attendance.date}
                            onKeyDown={handleKeyPress}
                            inputProps={{
                                "aria-readonly": 'true'
                                }}
                            sx={{ flex: 1, marginLeft: '10px', fontSize: '18px' }}
                        />
                    </Paper>

                    <Paper
                        component="form"
                        sx={{
                            marginTop: '16px',
                            marginLeft: '12px',
                            p: '10px 4px',
                            display: 'flex',
                            width: 350,
                            borderRadius: '30px',
                            alignItems: 'center',
                            backgroundColor: '#c2f3dd'
                        }}
                        >
                        <WorkRoundedIcon sx={{ml: 1}} htmlColor='#818283' /> 
                        <InputBase
                            id='work'
                            sx={{ 
                                flex: 1, 
                                marginLeft: '10px', 
                                fontSize: '18px',
                                "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": { display: "none" },
                                "& input[type=number]": { MozAppearance: "inputbase" } 
                            }}
                            placeholder='Work'
                            type='number'
                            defaultValue={attendance.work}
                            onKeyDown={handleKeyPress}
                            onChange={handleChange}
                        />
                    </Paper>

                    <Paper
                        component="form"
                        sx={{
                            marginTop: '16px',
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
                            id='overtime'
                            sx={{ 
                                flex: 1, 
                                marginLeft: '10px', 
                                fontSize: '18px',
                                "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": { display: "none" },
                                "& input[type=number]": { MozAppearance: "inputbase" } 
                            }}
                            placeholder='Overtime Hours'
                            type='number'
                            defaultValue={attendance.overtime}
                            onKeyDown={handleKeyPress}
                            onChange={handleChange}
                        />
                    </Paper>
                    
                    <Paper
                        component="form"
                        sx={{
                            marginTop: '16px',
                            marginLeft: '12px',
                            p: '10px 4px',
                            display: 'flex',
                            width: 350,
                            borderRadius: '30px',
                            alignItems: 'center',
                            backgroundColor: '#c2f3dd'
                        }}
                        >
                        <MoneyRoundedIcon sx={{ml: 1}} htmlColor='#818283' /> 
                        <InputBase
                            id='advance'
                            sx={{ 
                                flex: 1, 
                                marginLeft: '10px', 
                                fontSize: '18px',
                                "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": { display: "none" },
                                "& input[type=number]": { MozAppearance: "inputbase" } 
                            }}
                            placeholder='Advance'
                            type='number'
                            defaultValue={attendance.advance}
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
                                         marginTop: '60px'
                                        }}
                                onClick={handleSubmit}>
                                    Submit</Button>
                    </ThemeProvider>

                </div>
            
            </div>
        </div>
    )
}

export default AddAttendance