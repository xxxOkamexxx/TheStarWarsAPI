import { Link } from 'react-router-dom'

function FilmList({results}) {
  return (
    <>
        {results.map(result => (
            <div key={result.id}>
                <h3>{result.title}</h3>
                <p>{result.release_date}</p>
                <Link to={`/films/${result.id}`}>See episode</Link>
            </div>
        ) )}
      
    </>
  )
}

export default FilmList
