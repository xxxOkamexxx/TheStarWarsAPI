import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.css'


function HomePage() {
  return (
    <>              
        <Container className='home-contents'> 
            <h1>Star Wars Encyclopedia</h1>          
            <div className='link-items'>
                <p>FILM</p>
                <p>PEOPLE</p>
            </div>
        </Container>
    </>
  )
}

export default HomePage

