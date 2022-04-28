import {useState, useEffect} from 'react'
import { createContext, useContext } from 'react'

function Loading() {
    const [loading, setLoading] = useState(false)
    
  return (
    <div>Loading</div>
  )
}

export default Loading