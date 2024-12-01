import { useAuth } from '@providers/AuthProvider';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '@screens/Home';
import { Login } from '@screens/Login';
import { RoutesEnum } from 'src/libs/enums/routes';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export const Routes: React.FC = () => {
  const { userName } = useAuth();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!userName ? (
        <Stack.Screen
          name={RoutesEnum.LOGIN}
          component={Login}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen name={RoutesEnum.MAIN}>
          {() => (
            <Drawer.Navigator
              screenOptions={{
                headerShown: true,
                drawerStyle: {
                  backgroundColor: '#fff',
                  width: 250,
                },
              }}
            >
              <Drawer.Screen name={RoutesEnum.HOME} component={Home} />
            </Drawer.Navigator>
          )}
        </Stack.Screen>
      )}
    </Stack.Navigator>
  );
};
