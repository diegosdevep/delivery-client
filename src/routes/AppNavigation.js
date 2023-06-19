import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountStack from './AccountStack';
import HomeStack from './HomeStack';
import { iconOptions } from '../utils/iconOptions';

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
    >
      <Tab.Screen
        name='homeTab'
        component={HomeStack}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) =>
            focused ? iconOptions.home.focused : iconOptions.home.default,
        }}
      />
      <Tab.Screen
        name='accountTab'
        component={AccountStack}
        options={{
          title: 'Perfil',
          tabBarIcon: ({ focused }) =>
            focused ? iconOptions.account.focused : iconOptions.account.default,
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigation;
