/**
 * Star Warse API service
 */
import axios from "axios"

axios.defaults.baseURL = "https://swapi.dev/api"

const get = async (endpoint) => {
	const response = await axios.get(endpoint)
	return response.data
}


/**
 * Get All Films
 */

const getFilms = async () => {
    return get(`/films`)   
}

/**
 * Get a specific Film 
 */
 const getEpisode = async (id) => {
     return get(`/films/${id}`)
}

/**
 * Get All People  
 */
const getPeople = async (search, page) => {
    //console.log(`query in StarWarsAPI : ${query} `)
    return get(`/people/?search=${search}&page=${page}`)
}
// const getPeople = async (query) => {
//     return get(`/people/search?query=${query}}`)
// }
/**
 * Get a specific character  
 */
const getCharacter = async (id) => {
    return get(`/people/${id}`)
}


// eslint-disable-next-line import/no-anonymous-default-export
export default{
    getFilms,
    getPeople,
    getEpisode,
    getCharacter,
}