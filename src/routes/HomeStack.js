import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/HomeScreen';
import theme from '../theme/theme';
import MenuScreen from '../screens/home/Order/Menu/MenuScreen';
import DetailsScreen from '../screens/home/Order/Details/DetailsScreen';
import ResumeScreen from '../screens/home/Order/Resume/ResumeScreen';
import FormOrderScreen from '../screens/home/Order/FormOrder/FormOrderScreen';
import ProgressScreen from '../screens/home/Order/Progress/ProgressScreen';
import HeaderRight from '../components/shared/HeaderRigth';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.background },
        headerTitleStyle: {
          color: theme.colors.white,
        },
        // headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name='home'
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='menu'
        component={MenuScreen}
        options={{ title: 'Menu' }}
      />
      <Stack.Screen
        name='details'
        component={DetailsScreen}
        options={{ title: 'Detalles Orden', headerBackTitle: 'Back' }}
      />
      <Stack.Screen
        name='formOrden'
        component={FormOrderScreen}
        options={{ title: 'Ordenar Platillo' }}
      />
      <Stack.Screen
        name='resume'
        component={ResumeScreen}
        options={{ title: 'Resumen Pedido', headerBackVisible: false }}
      />
      <Stack.Screen
        name='progress'
        component={ProgressScreen}
        options={{ title: 'Progreso de Pedido' }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
