import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

const PageButtons = () => {
  return (
    <Container className="search-result-row mt-4">
        <div className="prev">
            <Button className='button'>Previous Page</Button>
        </div>
        <div className="page">PAGE</div>
        <div className="next">
            <Button className='button'>Next Page</Button>
        </div>
					
    </Container>
  )
}

export default PageButtons