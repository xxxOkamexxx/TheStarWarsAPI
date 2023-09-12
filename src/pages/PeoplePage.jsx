/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
import { useState, useEffect, useRef, useContext} from 'react'
import { Link } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'

import StarWarsAPI from '../services/StarWarsAPI'
import { getIdFromUrl } from '../helpers/index'
import { PageContext } from '../context/PageContext'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

const Peoplepage = () => {
  const [people, setPeople] = useState([])
  const [loading, setLoading] = useState(false)
  const {page, setPage} = useContext(PageContext)
  const [searchInput, setSearchInput] = useState('')
  const [searchParams, setSearchParams] = useSearchParams('')
  const searchInputRef = useRef()


  const search = searchParams.get('search')
  
  //console.log('searchParams: ', searchParams)
  console.log('searchInput:', searchInput)

  const getAllPeople = async (searchQuery = "", page = 1) => {
    console.log('getPeople fire!')
    setLoading(true)
    setPeople('')

    const data = await StarWarsAPI.getPeople(searchQuery, page)                 
    
    //console.log('data: ', data)
    console.log('searchQuery, page: ',searchQuery ,':', page)

    setPeople(data)
    setLoading(false)
  }

  const handleSubmit = async e => {
		e.preventDefault()  
    
		if (!searchInput.length) {
			return
		}

		setPage(1)
    setSearchParams({search: searchInput})
		//getAllPeople(searchInput, 1)
	}

  useEffect (() => {
    if (!search) {
			setSearchInput('')
      getAllPeople('', page)
			return
		}

    
    
//setSearchInput(search)
    getAllPeople(search, page)

  },[search, page])
  console.log('page', page)
  //console.log('search: ',search)

  

  return (
    <>
       <div className='d-flex flex-column align-items-center'>
        <h2 className='title'>People</h2>
        
        <Form onSubmit={handleSubmit} className="mb-3" style={{width:'70vw'}}>

          <InputGroup >
            <FormControl
                onChange={e => setSearchInput(e.target.value)}
                placeholder="Search..."
                ref={searchInputRef}
                required
                type="text"
                value={searchInput}
            />
            <Button
              type='submit'
              disabled={!searchInput.length} 
              className='button'
            >
              Search
            </Button>
          </InputGroup>
            
            {searchInput && (
              <p className='text-secondary'>
                Showing {people.count} search results for "{search}"...
              </p>
            )}

        </Form>
        
        {loading && (<div className="mt-4">Loading...</div>)}
       
        {people.results && (
          <div className='d-flex flex-column gap-3'>
            

            {people && people.results.filter(hits => {
              if(searchInput == ""){
                return hits
              } else if (hits.name.toLowerCase().includes(searchInput.toLocaleLowerCase())){ 
                return hits
              }}).map((person, key) => {
              return (
                
                <Card
                  style={{width:'70vw'}}     
                  className="d-flex flex-md-row flex-sm-column justify-content-between"
                  key={key}
                >
                <Card.Body className='col-md-4'>
                  <Card.Title className='list-title'>
                    {person.name}
                  </Card.Title>
                </Card.Body>

                <Card.Body className='col-md-4'>
                  <Card.Text>Gender: {person.gender}</Card.Text>
                  <Card.Text>Born: {person.birth_year}</Card.Text>
                </Card.Body>  
              
                <Card.Body className='align-self-end'>
                  <Button 
                    className='button'
                    as={Link}
                    to={`/people/${getIdFromUrl(person.url)}`}
                  >
                    Read more...
                  </Button>
                </Card.Body>
              </Card>

              )
              })

            
            }
              
              <div className="result-row mt-4">
                    <div className="prev">
                        <Button 
                          className='button'
                          disabled={people.previous === null || loading}
                          onClick={() => setPage(prevValue => prevValue -1)}
                        >
                          Previous Page
                        </Button>
                    </div>

                    <div className="page">{page}</div>

                    <div className="next">
                        <Button 
                          className='button'
                          disabled={people.next === null || loading}
                          onClick={() => setPage(prevValue => prevValue +1)}
                        >
                          Next Page
                        </Button>
                    </div>
              </div>
          </div>                      
        )}
      </div>   
    </>
  )
}

export default Peoplepage