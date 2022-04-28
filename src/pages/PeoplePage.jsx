import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import StarWarsAPI from '../services/StarWarsAPI'
import { getIdFromUrl } from '../helpers/index'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'


const Peoplepage = () => {
  const [people, setPeople] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)

  const getPeople = async (page) => {
    setLoading(true)

    const data = await StarWarsAPI.getPeople(page)
    setPeople(data)
    
    setLoading(false)
  }

  useEffect (() => {
    getPeople(page)

  },[page])

  
  return (
    <>
       <div className='d-flex flex-column align-items-center'>
        <h2 className='title'>People</h2>

        {loading && (<div className="mt-4">Loading...</div>)}
        
        {people.results && (
          <div className='d-flex flex-column gap-3'>
            {people.results && people.results.map(person => 
              <Card
                style={{width:'70vw'}}     
                className="d-flex flex-row justify-content-between"
                key={person.name}
              >
                <Card.Body className='col-4'>
                  <Card.Title className='list-title'>
                    {person.name}
                  </Card.Title>
                </Card.Body>

                <Card.Body className='col-4'>
                  <Card.Text>Gender: {person.gender}</Card.Text>
                  <Card.Text>Born: {person.birth_year}</Card.Text>
                </Card.Body>  
              
                <Card.Body className='align-self-end'>
                  <Button 
                    className='button'
                    as={Link}
                    to={`/people/${getIdFromUrl(person.url)}`}
                  >
                    Read more...
                  </Button>
                </Card.Body>
              </Card>
            )} 

              <div className="result-row mt-4">
                    <div className="prev">
                        <Button 
                          className='button'
                          disabled={people.previous === null}
                          onClick={() => setPage(prevValue => prevValue -1)}
                        >
                          Previous Page
                        </Button>
                    </div>

                    <div className="page">{page}</div>

                    <div className="next">
                        <Button 
                          className='button'
                          disabled={people.next === null}
                          onClick={() => setPage(prevValue => prevValue +1)}
                        >
                          Next Page
                        </Button>
                    </div>
              </div>
          </div>                      
        )}
      </div>   
    </>
  )
}

export default Peoplepage
