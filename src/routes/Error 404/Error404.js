import { Button } from '@mui/material'
import './Error404.css'
import { useNavigate } from 'react-router-dom'
import Fade from 'react-reveal'

const Error404 = () => {
  const navigate = useNavigate()
  return (
    <div className='error-404'>
      <Fade><h1>Error 404</h1></Fade>
      <Fade><p>Oops! It seems like the page you're looking for doesn't exist or has been moved.</p></Fade>
      <Fade>
        <span className='mt-[2rem]'>
          <Button onClick={() => navigate('/')}>Continue Playing</Button>
        </span>
      </Fade>
    </div>
  )
}

export default Error404