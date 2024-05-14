import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Account = () => {
    
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate("/calendar")
    }
  return (
    <div className='account'>
        <Button onClick={handleButtonClick}>click here</Button>
    </div>
  )
}

export default Account