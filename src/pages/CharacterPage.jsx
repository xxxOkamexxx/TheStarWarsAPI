import {useState, useEffect} from 'react'

import StarWarsAPI from '../services/StarWarsAPI'

import Card from 'react-bootstrap/Card'
import { useParams } from 'react-router-dom'

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
        <div>{character.name}</div>
      
    )}

    {loading && (<div className="mt-4">Loading...</div>)}
</div>

// "Back button?"

  )
}

export default CharacterPage
