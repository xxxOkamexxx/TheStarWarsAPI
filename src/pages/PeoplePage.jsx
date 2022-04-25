import {useState, useEffect} from 'react'

import StarWarsAPI from '../services/StarWarsAPI'
//import PageButtons from '../components/PageButtons'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const Peoplepage = () => {
  const [people, setPeople] = useState([])

  const getPeople = async () => {
    const data = await StarWarsAPI.getPeople()
    setPeople(data)
  }

  useEffect (() => {
    getPeople()
  },[])

  //Loading... Make a LoadingPage?

  return (
    <>
       <div className='d-flex flex-column align-items-center'>
        <h2 className='title'>People</h2>

          <div className='d-flex flex-column gap-3'>
            {people.results && people.results.map(person => 
              <Card style={{width:'60rem'}} className="p-3" key={person.name}>
                <Card.Title className='list-title'>
                  {person.name}
                </Card.Title>
              </Card>
          )} 

          </div>                 

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
