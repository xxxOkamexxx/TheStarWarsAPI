import {useState, useEffect} from 'react'

import StarWarsAPI from '../services/StarWarsAPI'

import Card from 'react-bootstrap/Card'
import { useParams } from 'react-router-dom'

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
          <div>{episode.title}</div>
                  
        )}

        {loading && (<div className="mt-4">Loading...</div>)}
    </div>

    // "Back" button?
    
  )
}

export default EpisodePage