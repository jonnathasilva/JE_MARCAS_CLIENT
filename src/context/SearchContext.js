import { createContext, useState } from 'react'

const Contextt = createContext()

function SearchContext({ children }) {
  const [search, setSearch] = useState('')

  return (
    <Contextt.Provider value={[search, setSearch]} >
      {children}
    </Contextt.Provider>
  )
}

export { Contextt, SearchContext }