import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../screens/account/profile/ProfileScreen';
import theme from '../theme/theme';

const Stack = createNativeStackNavigator();

const AccountStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen
        name='profile'
        component={ProfileScreen}
        options={{
          title: 'Perfil',
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default AccountStack;
