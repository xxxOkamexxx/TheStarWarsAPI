import {useState, useEffect} from 'react'

import StarWarsAPI from '../services/StarWarsAPI'
import PageButtons from '../components/PageButtons'

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

  //Loading...

  return (
    <>
       <div className='d-flex flex-column align-items-center'>
        <h2 className='title'>People</h2>

          <div className='d-flex flex-column gap-3'>
            {people.results && people.results.map(person => 
              <Card style={{width:'60rem'}} className="p-3">
                <Card.Title className='list-title'>
                  {person.name}
                </Card.Title>
              </Card>
          )} 

          </div>                 

          <div>
            <PageButtons />
          </div>

      </div>   
    </>
  )
}

export default Peoplepage
