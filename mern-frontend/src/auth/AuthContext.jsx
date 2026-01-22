import React, { createContext, useState, useEffect, useContext } from 'react';
import API from '../api/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            if (token) {
                try {
                    const response = await API.get('/users/profile');
                    setUser(response.data);
                } catch (error) {
                    console.error("Failed to fetch user profile", error);
                    logout();
                }
            }
            setLoading(false);
        };

        fetchUser();
    }, [token]);

    const login = async (email, password) => {
        const response = await API.post('/users/login', { email, password });
        const { token, user } = response.data;
        localStorage.setItem('token', token);
        setToken(token);
        setUser(user);
        return response.data;
    };

    const register = async (userData) => {
        const response = await API.post('/users/register', userData);
        const { token, user } = response.data;
        localStorage.setItem('token', token);
        setToken(token);
        setUser(user);
        return response.data;
    };

    const updateProfile = async (userData) => {
        const response = await API.put('/users/profile', userData);
        setUser(response.data);
        return response.data;
    };

    const deleteAccount = async () => {
        await API.delete('/users/profile');
        logout();
    };

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, token, isAuthenticated: !!token, loading, login, logout, register, updateProfile, deleteAccount }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
