import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { iconOptions } from '../utils/iconOptions';
import AccountStack from './AccountStack';
import HomeStack from './HomeStack';
import CartStack from './CartStack';
import TicketStack from './TicketStack';

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
        name='ticketTab'
        component={TicketStack}
        options={{
          title: 'Tickets',
          tabBarIcon: ({ focused }) =>
            focused ? iconOptions.ticket.focused : iconOptions.ticket.default,
        }}
      />
      <Tab.Screen
        name='cartTab'
        component={CartStack}
        options={{
          title: 'Carrito',
          tabBarIcon: ({ focused }) =>
            focused ? iconOptions.carrito.focused : iconOptions.carrito.default,
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
