/**
 * Star Warse API service
 */
import axios from "axios"

const BASE_URL = "https://swapi.dev/api"

/**
 * Get All Films
 */
const getFilms = async () => {
    const res = await axios.get(`${BASE_URL}/films`)

    return res.data
}

/**
 * Get a specific Film 
 */
 const getEpisode = async (id) => {
    const res = await axios.get(`${BASE_URL}/films/${id}`)

    return res.data
}

/**
 * Get All People  
 */
const getPeople = async () => {
    const res = await axios.get(`${BASE_URL}/people`)

    return res.data
}
/**
 * Get a specific character  
 */
const getCharacter = async (id) => {
    const res = await axios.get(`${BASE_URL}/people/${id}`)

    return res.data
}


// eslint-disable-next-line import/no-anonymous-default-export
export default{
    getFilms,
    getPeople,
    getEpisode,
    getCharacter,
}