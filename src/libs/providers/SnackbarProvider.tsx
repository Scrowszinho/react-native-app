import SnackbarComponent from '@components/Snackbar';
import React, { createContext, useState, ReactNode } from 'react';

interface SnackbarState {
  visible: boolean;
  message: string;
  duration: number;
  type?: 'error' | 'warning' | 'success' | 'default';
}

export interface SnackbarContextProps {
  showSnackbar: (
    message: string,
    duration?: number,
    type?: 'error' | 'warning' | 'success' | 'default',
  ) => void;
  hideSnackbar: () => void;
}

export const SnackbarContext = createContext<SnackbarContextProps>({
  showSnackbar: () => {},
  hideSnackbar: () => {},
});

interface SnackbarProviderProps {
  children: ReactNode;
}

export const SnackbarProvider: React.FC<SnackbarProviderProps> = ({
  children,
}) => {
  const [snackbarState, setSnackbarState] = useState<SnackbarState>({
    visible: false,
    message: '',
    duration: 3000,
    type: 'default',
  });

  const showSnackbar = (
    message: string,
    duration = 3000,
    type?: 'error' | 'warning' | 'success' | 'default',
  ) => {
    setSnackbarState({ visible: true, message, duration, type });
  };

  const hideSnackbar = () => {
    setSnackbarState({ ...snackbarState, visible: false });
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar, hideSnackbar }}>
      {children}
      {snackbarState.visible && (
        <SnackbarComponent
          message={snackbarState.message}
          duration={snackbarState.duration}
          onClose={hideSnackbar}
          type={snackbarState.type}
        />
      )}
    </SnackbarContext.Provider>
  );
};
