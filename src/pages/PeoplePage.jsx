import {useState, useEffect} from 'react'

import StarWarsAPI from '../services/StarWarsAPI'

import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'


const Peoplepage = () => {
  const [people, setPeople] = useState([])

  const getPeople = async () => {
    const data = await StarWarsAPI.getPeople()

    setPeople(data)
  }

  useEffect (() => {
    getPeople()
  },[])

  return (
    <>
      <div className="search-result-col mt-4">
        <h2 className='title'>People</h2>
          {people.results && people.results.map(person => 
              <ListGroup.Item>
                {person.name}
              </ListGroup.Item>
            )}           
            
  
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
