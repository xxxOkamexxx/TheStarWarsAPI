import {useState, useEffect} from 'react'

import StarWarsAPI from '../services/StarWarsAPI'

import Card from 'react-bootstrap/Card'
import { useParams } from 'react-router-dom'

function EpisodePage() {
    const [episode, setEpisode] = useState()
    const { id } = useParams()
  
    const getEpisode = async (id) => {
    const data = await StarWarsAPI.getEpisode(id)

    setEpisode(data)
  }
  
  useEffect (() => {
    getEpisode(id)     
  },[id])

  return (
    <div className='d-flex flex-column align-items-center'>
        {episode && (
          <div>{episode.title}</div>
          
        )}
    </div>
    
  )
}

export default EpisodePage