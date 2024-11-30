import { ThemeProvider } from '@providers/ThemeProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from '@navigations/Routes';
import { AuthProvider } from '@providers/AuthProvider';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <AuthProvider>
          <ThemeProvider>
            <Routes />
          </ThemeProvider>
        </AuthProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
