import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from '../screens/cart/CartScreen';

const Stack = createNativeStackNavigator();

const TicketStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='ticket' component={CartScreen} />
    </Stack.Navigator>
  );
};

export default TicketStack;
