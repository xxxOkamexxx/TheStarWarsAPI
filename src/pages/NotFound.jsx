import GoBackButton from '../context/GoBackButton'

const NotFound = () => {
	
	return (
		<>
			<div className="bgImage py-3 d-flex flex-column justify-content-between">
				<h2 className="title">Sorry, that page could not be found</h2>

				<div className='d-flex flex-row justify-content-around'>
					<GoBackButton />
				</div>
				

			</div>
			
		
			
		</>
	)
}

export default NotFound
