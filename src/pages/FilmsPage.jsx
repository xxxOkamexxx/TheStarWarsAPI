import {useState, useEffect} from 'react'
import {getFilms} from '../services/StarWarsAPI'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'


const FilmsPage = () => {  
  const [resource, setResourse] = useState()
  const [filmData, setFilmData] = useState()

  const handleSearch = (film) => {
    setResourse(film)
  }
  
  useEffect (() => {
    if(!resource){
      return
    }
    
    const fetchData = async () => {
      const data =  await getFilms(resource)
      console.log('data: ', data)

      setFilmData(data)
    }
    fetchData()
     
  },[resource])
  
  return (
    <>
      <div className="search-result-col mt-4">
        <h2 className='title'>{resource}</h2>
        <ListGroup>
          {[{filmData}].map(hit => (
            <ListGroup.Item>
              <getFilms onSearch={handleSearch} />
              <h3>Title:</h3>
              <p>Episode:</p>
              <p>Released:</p>
              <p>Characters:</p>
            </ListGroup.Item>          ))}
        </ListGroup>
  
        <div className="search-result-row mt-4">
						<div className="prev">
							<Button className='button'>Previous Page</Button>
						</div>
						<div className="page">PAGE</div>
						<div className="next">
							<Button className='button'>Next Page</Button>
						</div>
					</div>
      </div>
        
    </>
  )
}

export default FilmsPage