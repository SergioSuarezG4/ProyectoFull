import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(() => {
    const userStorage = localStorage.getItem("usuario");
    return userStorage ? JSON.parse(userStorage) : null;
  });

  const [token, setToken] = useState(() => {
    return localStorage.getItem("token") || null;
  });

  const login = (user, token) => {
    localStorage.setItem("usuario", JSON.stringify(user));
    localStorage.setItem("token", token);
    setUsuario(user);
    setToken(token);
  };

  // Función para logout
  const logout = () => {
    localStorage.removeItem("usuario");
    localStorage.removeItem("token");
    setUsuario(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ usuario, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
