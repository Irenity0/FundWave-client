import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';
import { GoogleAuthProvider } from 'firebase/auth';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create User
    const createUser = async (email, password) => {
        setLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            return userCredential;
        } catch (error) {
            console.error("Error creating user:", error);
        } finally {
            setLoading(false); 
        }
    }

    // Sign In User
    const signInUser = async (email, password) => {
        setLoading(true);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            return userCredential;
        } catch (error) {
            console.error("Error signing in:", error);
        } finally {
            setLoading(false);  
        }
    }

    // Google Sign-In Handler
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = async () => {
        setLoading(true);
        try {
            const result = await signInWithPopup(auth, googleProvider);
            console.log(result);
        } catch (error) {
            console.error("Google Sign-In Error:", error);
        } finally {
            setLoading(false);  
        }
    }

    // Log Out
    const logOut = async () => {
        setLoading(true);
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Error logging out:", error);
        } finally {
            setLoading(false);  
        }
    };

    // Persist user info in localStorage (optional)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            if (currentUser) {
                localStorage.setItem('user', JSON.stringify(currentUser));  // Persist user
            } else {
                localStorage.removeItem('user');  // Remove user data when logged out
            }
        });
        return () => unsubscribe(); 
    }, []);

    // You can read user info from localStorage on app load if needed
    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));  // Restore the user from localStorage
            setLoading(false);  // Finished loading
        } else {
            setLoading(false);  // No user found, stop loading
        }
    }, []);

    const userInfo = {
        user,
        loading,
        createUser,
        signInUser,
        logOut,
        handleGoogleSignIn
    };

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
