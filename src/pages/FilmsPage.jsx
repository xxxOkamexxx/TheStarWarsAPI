import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

import StarWarsAPI from '../services/StarWarsAPI'
import { getIdFromUrl } from '../helpers/index'

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


  return (
    <>
      <div className='d-flex flex-column align-items-center'>
        <h2 className='title'>Films</h2>

          <div className='d-flex flex-column gap-3'>
            {films.results && films.results.map(film => 
              <Card 
                style={{width:'70vw'}} 
                className="p-3 d-flex flex-row" 
                key={film.episode_id}                
              >
                <Card.Body>
                  <Card.Title className='list-title'>
                    {film.title}
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    <strong>Episode</strong> {film.episode_id}
                  </Card.Subtitle>
                  <Card.Text>
                    <strong>Released:</strong>{film.release_date}
                  </Card.Text>
                </Card.Body>
                <Card.Body className=''>
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

          </div>                 
          
          {loading && (<div className="mt-4">Loading...</div>)}

          {/**
           * 時間があれば Buttonファンクションファイルを作る 
           * peoplePageも同様
           */}

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