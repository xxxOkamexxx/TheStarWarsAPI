import GoBackButton from '../context/GoBackButton'

const NotFound = () => {
	
	return (
		<>
			<div className="bgImage d-flex flex-column justify-content-between p-3">
				<h2 className="title">Sorry, that page could not be found</h2>

				<GoBackButton />

			</div>
			
		
			
		</>
	)
}

export default NotFound
