import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Icon, Input } from 'react-native-elements';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import { styles } from './loginForm.styles';
import { useFormik } from 'formik';
import { initialValues, validationSchema } from '../login/loginForm.data';
import { useDispatch } from 'react-redux';
import { signIn } from '../../../redux/authReducer';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const showHidePassword = () => setShowPassword((prevState) => !prevState);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(
          auth,
          formValue.email,
          formValue.password
        );
        const { uid } = userCredential.user;

        await AsyncStorage.setItem('@userToken', uid);
        dispatch(signIn(uid));
      } catch (error) {
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: 'Email o Password Incorrecto',
        });
      }
    },
  });

  return (
    <KeyboardAvoidingView
      behavior='padding'
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -250}
    >
      <View>
        <Input
          placeholder='correo@correo.com'
          keyboardType='email-address'
          rightIcon={
            <Icon
              type='material-community'
              name='at'
              size={24}
              color={'black'}
            />
          }
          onChangeText={(text) => formik.setFieldValue('email', text)}
          errorMessage={formik.errors.email}
        />
        <Input
          placeholder='*********'
          keyboardType='default'
          secureTextEntry={showPassword ? false : true}
          rightIcon={
            <Icon
              type='material-community'
              name={showPassword ? 'eye-off-outline' : 'eye-outline'}
              size={24}
              color={'black'}
              onPress={showHidePassword}
            />
          }
          onChangeText={(text) => formik.setFieldValue('password', text)}
          errorMessage={formik.errors.password}
        />
        <Button
          title='Iniciar Sesion'
          onPress={formik.handleSubmit}
          loading={formik.isSubmitting}
        />
        <View>
          <Text onPress={() => navigation.navigate('register')}>
            No tienes cuenta? <Text>Registrate aqui</Text>
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginForm;
