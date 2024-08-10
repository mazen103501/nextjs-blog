"use client";
import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { auth } from '@/config/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const authValue = useProvideAuth();
  return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);

function useProvideAuth() {
  const [user, setUser] = useState(localStorage.getItem('user'));

  const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password);
  const signin = (email, password) => signInWithEmailAndPassword(auth, email, password);
  const signout = () => signOut(auth).then(() => {
    setUser(null)
    localStorage.removeItem('user');
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      const storedUser = localStorage.getItem('user');
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        setUser(user);
      } else if (storedUser) {
        setUser(storedUser);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return { user, signup, signin, signout };
}