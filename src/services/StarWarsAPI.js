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
 * Get All People  
 */
const getPeople = async () => {
    const res = await axios.get(`${BASE_URL}/people`)

    return res.data
}


// eslint-disable-next-line import/no-anonymous-default-export
export default{
    getFilms,
    getPeople,
}