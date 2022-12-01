import React, { createContext } from "react";

interface AuthenticationContext {
  isAuthenticated: boolean;
  login: Function;
  logout: Function;
}

export const AppContext = createContext<AuthenticationContext | null>(null);

export const AppContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(true);

  const login = () => {
    setIsAuthenticated(true);
  };
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.clear();
  };

  return (
    <AppContext.Provider value={{ isAuthenticated, login, logout }}>
      {props.children}
    </AppContext.Provider>
  );
};
