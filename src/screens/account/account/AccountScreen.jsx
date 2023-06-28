import { Image, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAuth, signOut } from 'firebase/auth';
import { signOut as signOutAction } from '../../../redux/authReducer';
import InputBtn from '../../../components/account/profile/inputBtn/InputBtn';
import BtnLogout from '../../../components/account/profile/logout/BtnLogout';
import { useNavigation } from '@react-navigation/native';
import { styles } from './accountScreen.styles';
import { useDispatch } from 'react-redux';

const AccountScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const logout = async () => {
    const auth = getAuth();
    await signOut(auth);
    await AsyncStorage.removeItem('@userToken');
    dispatch(signOutAction());
  };

  return (
    <View>
      <View style={styles.card}>
        <Image
          source={require('../../../../assets/profile-avatar.png')}
          style={styles.image}
        />
      </View>
      <View>
        <InputBtn
          icon='person'
          text='Mi Perfil'
          onPress={() => navigation.navigate('profile')}
        />
        <InputBtn
          icon='shopping-bag'
          text='Mis Compras'
          onPress={() => navigation.navigate('history')}
        />
      </View>

      <BtnLogout title='Cerrar Sesion' onPress={logout} />
    </View>
  );
};

export default AccountScreen;
