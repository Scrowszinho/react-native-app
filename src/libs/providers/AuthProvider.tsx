import React, { createContext, useContext, useState, ReactNode } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RoutesEnum } from '@enums/routes';
import { RootStackParamList } from '@navigations/Records';

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
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const login = (name: string) => {
    setUserName(name);
  };

  const logout = () => {
    setUserName(null);
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
