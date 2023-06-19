import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { initFirebase } from './src/firebase/firebase';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import AccountScreen from './src/screens/account/AccountScreen';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Provider store={store}>
          <AccountScreen />
        </Provider>
      </NavigationContainer>
      <Toast />
    </>
  );
}
