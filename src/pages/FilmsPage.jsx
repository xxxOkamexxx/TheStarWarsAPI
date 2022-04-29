import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

import StarWarsAPI from '../services/StarWarsAPI'
import { getIdFromUrl } from '../helpers/index'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'


const FilmsPage = () => {  
  const [films, setFilms] = useState([])
  const [loading, setLoading] = useState(false)   
  const [page, setPage] = useState(1)
  
  const getAllFilms = async (page) => {
    setLoading(true)

    const data = await StarWarsAPI.getFilms(page)
    setFilms(data)

    setLoading(false)
  }

  useEffect (() => { 
    getAllFilms(page) 

  },[page])


  return (
    <>
      <div className='d-flex flex-column align-items-center'>
        <h2 className='title'>Films</h2>

        {loading && (<div className="mt-4">Loading...</div>)}

        {films.results && (
          <div className='d-flex flex-column gap-3'>
          {films.results && films.results.map((film, key) => 
            <Card 
              style={{width:'70vw'}} 
              className="d-flex flex-row justify-content-between" 
              key={key}                
            >
              <Card.Body className='col-4'>
                <Card.Title className='list-title'>
                  {film.title}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <strong>Episode</strong> {film.episode_id}
                </Card.Subtitle>
              </Card.Body> 

              <Card.Body className='col-4'> 
                <Card.Text>
                  <strong>Released:</strong>{film.release_date}
                </Card.Text>
              </Card.Body>

              <Card.Body className='align-self-end'>
                <Button 
                  className='button end-0'
                  as={Link}
                  to={`/films/${getIdFromUrl(film.url)}`}
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
                    disabled={films.previous === null}
                    onClick={() => setPage(prevValue => prevValue -1)}
                  >
                    Previous Page
                  </Button>
              </div>

              <div className="page">{page}</div>
              
              <div className="next">
                  <Button 
                    className='button'
                    disabled={films.next === null}
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

export default FilmsPage