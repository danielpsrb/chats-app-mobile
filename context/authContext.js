import { createContext, useState, useEffect, useContext } from "react";
import  { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth, db } from '../firebaseConfig'
import { doc, setDoc, getDoc } from "firebase/firestore";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(undefined);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth ,(user) => {
            if(user) {
                setIsAuthenticated(true);
                setUser(user);
            } else {
                setIsAuthenticated(false);
                setUser(null);
            }
        });
        return unsub;
    },[])

    const login = async (email, password) => {
        try {
            
        } catch (err) {
            
        }
    }

    const logout = async () => {
        try {
            await signOut(auth);
            return { success: true }
        } catch (err) {
            return { success: false, message: err.message, error: err };
        }
    }

    const register = async (email, password, username, profileUrl) => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log('response user: ', response?.user)

            //setUser(response?.user)
            //setIsAuthenticated(true)

            await setDoc(doc(db, "users", response?.user?.uid), {
                username,
                profileUrl,
                userId: response?.user?.uid
            });
            return { success: true, data: response?.user };
        } catch (err) {
            let message = err.message;
            if(message.includes('(auth/invalid-email)')) message = 'Invalid email';
            return { success: false, message };
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
