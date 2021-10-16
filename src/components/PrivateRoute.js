import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import getUser from '../contexts/getCurrentUser';

export default function PrivateRoute({ component: Component, ...rest }) {

    const currentUser = getUser()

    return (
        <Route
        {...rest}
        render={props => {
            return currentUser ? <Component {...props} /> : <Redirect to="/login" />
        }}
        >
            
        </Route>
    )
}
