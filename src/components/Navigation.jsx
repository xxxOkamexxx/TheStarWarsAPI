import { useContext } from 'react'
import {Link, NavLink} from 'react-router-dom'
import { PageContext } from '../context/PageContext'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Navigation = () => {

    const {setPage} = useContext(PageContext)
    //console.log('page-context', page)
    
  return (
    
    <Navbar expand="md">
        <Container>
            <Navbar.Brand className='title' as={Link} to="/">
                Star Wars Encyclopedia
            </Navbar.Brand>

            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ms-auto'>
                    <Nav.Link as={NavLink} end to='/'>
                        Home
                    </Nav.Link>
                    <Nav.Link as={NavLink} end to='/films'>
                        Films
                    </Nav.Link>
                    <Nav.Link as={NavLink} end to='/people' onClick={()=>setPage(1)}>
                        People
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>

        </Container>

      
    </Navbar>
  )
}

export default Navigation