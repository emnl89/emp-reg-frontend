import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/signUp");
  }

  return (
    <div className='home'>
      <div className='banner-image'></div>
      <h1 className='primary-heading'>
        Want to track attendance and manage your expenses?
      </h1>
      <hr className='section-divider'/>
      <p className='primary-text'>
        Looking to simplify attendance tracking, streamline expense management,
        and handle bills effortlessly? Explore our tools designed to enhance
        productivity and streamline your administrative tasks.  
      </p>
      <Button 
              style={{ fontSize: '40px',
                       width: '20vw',
                       fontFamily: "Reem Kufi, sans seriff"
              }}
              onClick={handleButtonClick}
      >
        Register Now</Button>
    </div>
  )
}

export default Home