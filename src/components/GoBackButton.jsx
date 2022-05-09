import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'


const GoBackButton = () => {

    const navigate = useNavigate()


  return (
    <div className='d-flex justify-content-center' onClick={() => navigate(-1)}>
        <Button className='button'>
        Back
        </Button>
    </div>
  )
}

export default GoBackButton