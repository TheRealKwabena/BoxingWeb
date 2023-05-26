import React from 'react'
import {Navigate} from 'react-router-dom'

const Protected = ({loggedIn, children}) => {
    if(!loggedIn) {
        return <Navigate to="/login" replace />
    }
    else {
        return children
    }
  
}

export default Protected