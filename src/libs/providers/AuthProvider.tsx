import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useNavigation } from '@react-navigation/native';
import { RoutesEnum } from '@enums/routes';

interface AuthContextProps {
  userName: string | null;
  login: (name: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userName, setUserName] = useState<string | null>(null);
  const navigation = useNavigation();

  const login = (name: string) => {
    setUserName(name);
    navigation.navigate(RoutesEnum.HOME);
  };

  const logout = () => {
    setUserName(null);
    navigation.navigate(RoutesEnum.LOGIN);
  };

  return (
    <AuthContext.Provider value={{ userName, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};
