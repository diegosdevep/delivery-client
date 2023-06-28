import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Toast from 'react-native-toast-message';
import AuthCheckStack from '../../routes/AuthCheckStack';
import AppNavigation from '../../routes/AppNavigation';
import { restoreToken } from '../../redux/authReducer';

const AuthCheckScreen = () => {
  const userToken = useSelector((state) => state.auth.userToken);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkToken = async () => {
      try {
        const auth = getAuth();
        const token = await AsyncStorage.getItem('@userToken');
        if (token) {
          dispatch(restoreToken(token));
        } else {
          onAuthStateChanged(auth, async (user) => {
            if (user) {
              const { uid } = user;
              await AsyncStorage.setItem('@userToken', uid);
              dispatch(restoreToken(uid));
            }
          });
        }
      } catch (error) {
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: 'Error al verificar el usuario',
        });
      }
    };
    checkToken();
  }, []);

  // if (userToken === false) return <Loading show text='Loading' />;

  return userToken ? <AppNavigation /> : <AuthCheckStack />;
};

export default AuthCheckScreen;
