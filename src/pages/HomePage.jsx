import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.css'


function HomePage() {
  return (
    <>              
        <Container className='home-contents'> 
            <h1 className='title'>Star Wars Encyclopedia</h1>
            <img src="./assets/bb.jpg" alt="" />                      
        </Container>
    </>
  )
}

export default HomePage

