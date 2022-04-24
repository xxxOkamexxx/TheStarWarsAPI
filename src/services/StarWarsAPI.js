/**
 * Star Warse API service
 */
import axios from "axios"

const BASE_URL = "https://swapi.dev/api"

/**
 * Get Films
 * 
 * @param {string} query 
 */
const getFilms = async query => {
    const response = await axios.get(`${BASE_URL}/films/search?query=${query}`)

    return response.data
}

/**
 * Get People
 * 
 * @param {string} query  
 */
const getPeople = async query => {
    const response = await axios.get(`${BASE_URL}/people/search?query=${query}`)

    return response.data
}


export {
    getFilms,
    getPeople,
}