import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Calendar = () => {

  const navigate = useNavigate();

  const handleDateChange = (date) => {

    const datePart = date.toISOString().split('T')[0];

    navigate(`/calendar/day?date=${datePart}`);
  }

  return (
    <div className='calendar'>
        <LocalizationProvider dateAdapter={AdapterDayjs} >
            <StaticDatePicker 
              className='date'
              orientation="landscape"
              onAccept={handleDateChange} />
        </LocalizationProvider>
    </div>
  )
}

export default Calendar