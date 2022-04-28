import HomeImage from '../assets/bb.jpg'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'


function HomePage() {
  return (
    <>              
        <Container className='home-contents'> 
            <h1 className='title'>Star Wars Encyclopedia</h1>
            <Image src={HomeImage} fluid />                    
        </Container>
    </>
  )
}

export default HomePage

