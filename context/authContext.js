import { createContext, useState, useEffect, useContext } from "react";


export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(undefined);

    useEffect(() => {
        //

        // setTimeout(() => {
            setIsAuthenticated(false)
        // }, 3000);
    }, [])

    const login = async (email, password) => {
        try {
            
        } catch (err) {
            
        }
    }

    const logout = async () => {
        try {
            
        } catch (err) {
            
        }
    }

    const register = async (email, password, username, profileUrl) => {
        try {
            
        } catch (err) {
            
        }
    }

    return (
        <AuthContext.Provider value={{user, isAuthenticated, login, logout, register}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const value = useContext(AuthContext);

    if(!value) {
        throw new Error("useAuth must be used within an AuthContextProvider");
    }
    return value;
}