import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TicketTopNavigation from './TicketTopNavigation';
import theme from '../theme/theme';

const Stack = createNativeStackNavigator();

const TicketStack = ({ route }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.background },
      }}
    >
      <Stack.Screen
        name='ticket'
        component={TicketTopNavigation}
        initialParams={route.params}
        options={{
          title: 'Tus Ordenes',
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default TicketStack;
