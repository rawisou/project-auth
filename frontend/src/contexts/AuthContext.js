import react, { createContext, useContext, useEffect, useState } from "react";
import { auth } from '../services/firebase'

const AuthContext = createContext({
    currentUser: null,
})

export const useAuth = () => useContext(AuthContext)

export const AuthcontextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)

    const value = {
        currentUser
    }
    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}