import React from 'react'
import { Navbar, Hero, Prompt, Loader } from './components'
import { useContext } from 'react'
import { GeminiContext } from './Context/GeminiContext'


const App = () => {

  const { isLoading } = useContext(GeminiContext)

  return (
    <>
      <Navbar />
      {!isLoading ? <Hero /> : <Loader />}
      <Prompt />

    </>
  )
}

export default App