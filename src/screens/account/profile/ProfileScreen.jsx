import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { getAuth, signOut } from 'firebase/auth';
import { signOut as signOutAction } from '../../../redux/authReducer';

const ProfileScreen = () => {
  const dispatch = useDispatch();

  const logout = async () => {
    const auth = getAuth();
    await signOut(auth);
    await AsyncStorage.removeItem('@userToken');
    dispatch(signOutAction());
  };

  return (
    <View>
      <Text>ProfileScreen</Text>
      <Button title='Cerrar Sesion' onPress={logout} />
    </View>
  );
};

export default ProfileScreen;
