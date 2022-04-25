import {useState, useEffect} from 'react'

import StarWarsAPI from '../services/StarWarsAPI'
import PageButtons from '../components/PageButtons'

import Card from 'react-bootstrap/Card'


const FilmsPage = () => {  
  const [films, setFilms] = useState([])
  
  const getFilms = async () => {
    const data = await StarWarsAPI.getFilms()

    setFilms(data)
  }
  
  useEffect (() => {
    getFilms()     
  },[])

  // Loading...

  return (
    <>
      <div className='d-flex flex-column align-items-center'>
        <h2 className='title'>Films</h2>

          <div className='d-flex flex-column gap-3'>
            {films.results && films.results.map(film => 
              <Card style={{width:'60rem'}} className="p-3">
                <Card.Title className='list-title'>
                  {film.title}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <strong>Episode</strong> {film.episode_id}
                </Card.Subtitle>
                <Card.Text>
                  <strong>Released:</strong>{film.release_date}
                </Card.Text>
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

export default FilmsPage