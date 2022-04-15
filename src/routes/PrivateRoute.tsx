import {  FC } from 'react'
import { Navigate } from 'react-router-dom'
import { useSessionState } from '../contexts/sessionContext'

interface PropType {
    component: FC 
}

const PrivateRoute : FC<PropType> = ({component: Component}) =>{
    const session = useSessionState()

    return session.id === '' ? <Navigate to='/login'/> : <Component/>   
}

export default PrivateRoute