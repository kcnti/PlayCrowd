import React, { useContext, useEffect, useState } from 'react'
import app, { auth } from '../firebase';
import getUser from './getCurrentUser';
import 'firebase/compat/database';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export default function AuthProvider({ children }) {

    const user = getUser();
    const [ currentUser, setCurrentUser] = useState('')
    const [loading, setLoading] = useState(true);

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        localStorage.removeItem('authUser');
        return auth.signOut();
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email);
    }

    function updateEmail(email) {
        return currentUser.updateEmail(email)
    }

    function updatePassword(password) {
        return currentUser.updatePassword(password)
    }

    function uploadMessage(name, email, message) {
        let db = app.database().ref('/messages')
        return db.push({
            name: name,
            email: email,
            message: message
        })
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            user ? localStorage.setItem('authUser', JSON.stringify(user)) : localStorage.removeItem('authUser')
            setCurrentUser(user);
            setLoading(false)
            setLoading(false)
        });

        return unsubscribe;
    }, [])


    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
        uploadMessage
    };

    return (
        <AuthContext.Provider value={!loading && value}>
            {children}
        </AuthContext.Provider>
    );
}
