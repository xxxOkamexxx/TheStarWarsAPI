import {useState, useEffect} from 'react'

import StarWarsAPI from '../services/StarWarsAPI'
//import PageButtons from '../components/PageButtons'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'


const FilmsPage = () => {  
  const [films, setFilms] = useState([])
  const [loading, setLoading] = useState(false)
  
  const getAllFilms = async () => {
    setLoading(true)

    const data = await StarWarsAPI.getFilms()
    setFilms(data)

    setLoading(false)
  }

  useEffect (() => {
  
    getAllFilms()     
  },[])

  // Loading...

  return (
    <>
      <div className='d-flex flex-column align-items-center'>
        <h2 className='title'>Films</h2>

          <div className='d-flex flex-column gap-3'>
            {films.results && films.results.map(film => 
              <Card 
                style={{width:'60rem'}} 
                className="p-3" 
                key={film.episode_id}
                to={`/films/id`}
              >

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

export default FilmsPage