import {useState, useEffect} from 'react'

import StarWarsAPI from '../services/StarWarsAPI'

import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'


const FilmsPage = () => {  
  const [films, setFilms] = useState([])
  

  const getFilms = async () => {
    const data = await StarWarsAPI.getFilms()

    setFilms(data)
  }
  
  useEffect (() => {
    getFilms()     
  },[])
  
  return (
    <>
      <div className="search-result-col mt-4">
        <h2 className='title'>{films}</h2>
                
          <ListGroup className="filmslist">
            {films.map(film => 
              <ListGroup.Item
                action
                key={film.episode_id}
              >
                {film.title}
              </ListGroup.Item>
            )}           
          </ListGroup>
            
  
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