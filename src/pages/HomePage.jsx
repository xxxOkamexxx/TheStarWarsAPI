import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'


function HomePage() {
  return (
    <>              
        <div className="homeImage py-3 d-flex flex-column justify-content-between">
          <h1 className='title'>Star Wars Encyclopedia</h1>

          <div className='d-flex flex-row justify-content-around'>
            <Button 
              className='button'
              as={Link}
              to={'/films'}
            >
              Films
            </Button>
            <Button 
              className='button'
              as={Link}
              to={'/people'}
            >
              People
            </Button>
          </div>
        </div>
            
                             
        
    </>
  )
}

export default HomePage

