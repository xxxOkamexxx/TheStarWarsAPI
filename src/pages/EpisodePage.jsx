import { useState, useEffect } from 'react'
import{ Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

import StarWarsAPI from '../services/StarWarsAPI'
import { getIdFromUrl } from '../helpers/index'
import GoBackButton from '../context/GoBackButton'

import ListGroup from 'react-bootstrap/ListGroup'

function EpisodePage() {
    const [episode, setEpisode] = useState()
    const [loading, setLoading] = useState(false)
    const { id } = useParams()
  
    const getEpisode = async (id) => {
      setLoading(true)

      const data = await StarWarsAPI.getEpisode(id)

      setEpisode(data)
      setLoading(false)
    }
  
  useEffect (() => {
    getEpisode(id)     
  },[id])

  return (
    <div className='d-flex flex-column align-items-center'>
        {episode && (
          
          <ListGroup style={{width:'70vw'}} className="p-3" key={episode.index}>
            <ListGroup.Item>
              <h3 className='list-title'>{episode.title}</h3>
              <p>Episode: {episode.episode_id}</p>
              <p>Derector: {episode.director}</p>
              <p>Producer: {episode.producer}</p>
              <p>Release Date: {episode.release_date}</p>
              <p>Characters:</p>              
              {episode.characters && episode.characters.map(character => 
                <ListGroup.Item
                  as={Link}
                  to={`/people/${getIdFromUrl(character)}`}
                >
                  {`Character ${getIdFromUrl(character)}`}
                </ListGroup.Item>
              )}
            </ListGroup.Item>         
          </ListGroup>
                             
        )}

        {loading && (<div className="mt-4">Loading...</div>)}
        
        <GoBackButton />
        
    </div>

    // "Back" button?
    
  )
}

export default EpisodePage