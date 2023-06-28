import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../screens/account/profile/ProfileScreen';
import HistoryScreen from '../screens/account/history/HistoryScreen';
import AccountScreen from '../screens/account/account/AccountScreen';

const Stack = createNativeStackNavigator();

const AccountStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerShown: false,
      }}
    >
      <Stack.Screen
        name='account'
        component={AccountScreen}
        options={{
          title: 'Mi Cuenta',
        }}
      />
      <Stack.Screen
        name='profile'
        component={ProfileScreen}
        options={{
          title: 'Perfil',
        }}
      />
      <Stack.Screen
        name='history'
        component={HistoryScreen}
        options={{
          title: 'Historial',
        }}
      />
    </Stack.Navigator>
  );
};

export default AccountStack;
