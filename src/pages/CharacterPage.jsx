import {useState, useEffect} from 'react'
import{ Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

import StarWarsAPI from '../services/StarWarsAPI'
import { getIdFromUrl } from '../helpers/index'
import GoBackButton from '../components/GoBackButton'

import ListGroup from 'react-bootstrap/ListGroup'

function CharacterPage() {
    const [character, setCharacter] = useState()
    const [loading, setLoading] = useState(false)
    const { id } = useParams()
  
    const getCharacter = async (id) => {
      setLoading(true)

      const data = await StarWarsAPI.getCharacter(id)

      setCharacter(data)
      setLoading(false)
    }
  
  useEffect (() => {
    getCharacter(id)     
  },[id])

  return (
    <div className='d-flex flex-column align-items-center'>
        {character && (
          
          <ListGroup style={{width:'70vw'}} className="p-3" key={character.name}>
            <ListGroup.Item>
              <h3 className='list-title'>{character.name}</h3>

              <p>Gender: {character.gender}</p>
              <p>Birth year: {character.birth_year}</p>
              <p>Height: {character.height} cm</p>
              <p>Mass: {character.mass} kg</p>
              <p>Hair color: {character.hair_color}</p>
              <p>Skin color: {character.skin_color}</p>

              <p>Films:</p>              


              {character.films && character.films.map((film, key )=> 

                <ListGroup.Item
                  key={key}
                  as={Link}
                  to={`/films/${getIdFromUrl(film)}`}
                >
                  {`Film ${getIdFromUrl(film)}`}
                </ListGroup.Item>
              )}
            </ListGroup.Item>         
          </ListGroup>
                             
        )}

        {loading && (<div className="mt-4">Loading...</div>)}

        <GoBackButton />
        
    </div>

  )
}

export default CharacterPage
