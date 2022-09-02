import { createContext, useState } from 'react'

const Context = createContext()

function ModalContext({ children }) {
  const [menu, setMenu] = useState(false)

  return (
    <Context.Provider value={[menu, setMenu]} >
      {children}
    </Context.Provider>
  )
}

export { Context, ModalContext }