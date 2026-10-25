import { createContext, useState, useEffect } from 'react';
import { authService } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('audiora_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error(e);
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const res = await authService.login(email, password);
    setUser(res.user);
    localStorage.setItem('audiora_user', JSON.stringify(res.user));
    localStorage.setItem('audiora_token', res.token);
    return res;
  };

  const register = async (username, email, password) => {
    const res = await authService.register(username, email, password);
    setUser(res.user);
    localStorage.setItem('audiora_user', JSON.stringify(res.user));
    localStorage.setItem('audiora_token', res.token);
    return res;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('audiora_user');
    localStorage.removeItem('audiora_token');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
