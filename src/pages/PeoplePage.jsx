//import {useState, useEffect} from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'


function Peoplepage() {
  

  return (
    <>
      <div className="search-result-col mt-4">
        <h2 className='title'>PEOPLE</h2>
        <ListGroup>
          placeholder
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

export default Peoplepage
