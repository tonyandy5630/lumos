'use client'
import React from 'react'

const defaultValue = {
    user: null,
}

export const AuthContext = React.createContext(defaultValue)

export const useAuth = () => React.useContext(AuthContext)

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = React.useState()

    const value = { user, setUser }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
