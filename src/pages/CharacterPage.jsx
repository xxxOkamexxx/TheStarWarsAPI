import {useState, useEffect} from 'react'

import StarWarsAPI from '../services/StarWarsAPI'

import Card from 'react-bootstrap/Card'
import { useParams } from 'react-router-dom'

function CharacterPage() {
    const [character, setCharacter] = useState()
    const { id } = useParams()
  
    const getCharacter = async (id) => {
    const data = await StarWarsAPI.getCharacter(id)

    setCharacter(data)
  }
  
  useEffect (() => {
    getCharacter(id)     
  },[id])

  return (
    <div className='d-flex flex-column align-items-center'>
        {character && (
        <div>{character.name}</div>
      
    )}
</div>
  )
}

export default CharacterPage
