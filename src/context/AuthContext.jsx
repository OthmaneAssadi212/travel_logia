// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import axios from "axios"

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const AuthContext = createContext();

// Hook pour consommer plus facilement
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Au montage, on hydrate depuis localStorage
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // optionnel : fetch user profile avec ce token
      setUser({ token }); 
    }
  }, []);

  // Appel à votre API pour vous loguer
  const login = async ({ email, password }) => {
    const res = await api.post('/auth/login', {email, password})
    const data = res.data.data
    if (!data) throw new Error("Login Error");
    localStorage.setItem('token', res.data.token);
    setUser({ token: data.token, ...data.user });
    return data;
  };

    const register = async ({ name, email, password }) => {
    const res = await api.post('/auth/signup', { name, email, password , passwordConfirm : password})
    const data = res.data.data
    return data;
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const value = { user, login, register, logout , api };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
