import { createContext, useState } from 'react'

export const PageContext = createContext()

const PageContextProvider = ({ children }) =>{
    const [page, setPage] = useState (1)
    const values = { page, setPage }


  return (
    <PageContext.Provider value={values} > {children} </PageContext.Provider>
  )
}

export default PageContextProvider