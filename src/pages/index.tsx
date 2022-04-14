import { FC } from 'react'
import Home from 'components/home'

import { useSessionState } from '../contexts/sessionContext'

const HomePage : FC = () =>{

  const state = useSessionState()

  console.log('{state} :',state)


  return(
    <div>
        <Home/>
    </div>
  )
} 

export default HomePage