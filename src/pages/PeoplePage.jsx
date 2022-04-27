import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import StarWarsAPI from '../services/StarWarsAPI'
import { getIdFromUrl } from '../helpers/index'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'


const Peoplepage = () => {
  const [people, setPeople] = useState([])
  const [loading, setLoading] = useState(false)

  const getPeople = async () => {
    setLoading(true)

    const data = await StarWarsAPI.getPeople()
    setPeople(data)
    
    setLoading(false)
  }

  useEffect (() => {
    getPeople()
  },[])


  return (
    <>
       <div className='d-flex flex-column align-items-center'>
        <h2 className='title'>People</h2>
        
          <div className='d-flex flex-wrap gap-3 justify-content-center'>
            {people.results && people.results.map(person => 
              <Card     
                className="p-3 d-flex flex-col col-3 " 
                key={person.name}
              >
                <div>
                  <Card.Title className='list-title'>
                    {person.name}
                  </Card.Title>
                  <Card.Text>Gender: {person.gender}</Card.Text>
                  <Card.Text>Born: {person.birth_year}</Card.Text>
                </div>
                

                <Card.Body>
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

          </div>  
                         
          {loading && (<div className="mt-4">Loading...</div>)}

          <div className="search-result-row mt-4">
            <div className="prev">
                <Button className='button'>Previous Page</Button>
            </div>
            <div className="page">PAGE</div>
            <div className="next">
                <Button className='button'>Next Page</Button>
            </div>
          </div>

      </div>   
    </>
  )
}

export default Peoplepage