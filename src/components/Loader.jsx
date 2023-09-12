import { FadeLoader } from 'react-spinners'

import React from 'react'

const Loader = () => {
  return (
    <FadeLoader 

      color='#fd7e14'
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  )
}

export default Loader

