import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from '../screens/cart/CartScreen';

const Stack = createNativeStackNavigator();

const CartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='cart' component={CartScreen} />
    </Stack.Navigator>
  );
};

export default CartStack;
