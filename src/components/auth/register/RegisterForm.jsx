import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Icon, Input } from 'react-native-elements';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import Toast from 'react-native-toast-message';
import { initialValues, validationSchema } from '../register/registerForm.data';
import { useFormik } from 'formik';
import { styles } from './registerForm.styles';
import theme from '../../../theme/theme';

const RegisterForm = () => {
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
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          formValue.email,
          formValue.password
        );

        const { uid, email } = userCredential.user;

        const firestore = getFirestore();
        const usersCollection = collection(firestore, 'users');
        await addDoc(usersCollection, {
          uid,
          email,
        });
      } catch (error) {
        console.log(error);
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: 'Error al registrarse',
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
          placeholder='Correo'
          keyboardType='email-address'
          rightIcon={
            <Icon
              type='material-community'
              name='at'
              size={24}
              color={theme.colors.primary}
            />
          }
          onChangeText={(text) => formik.setFieldValue('email', text)}
          errorMessage={formik.errors.email}
        />
        <Input
          placeholder='Contraseña'
          secureTextEntry={showPassword ? false : true}
          rightIcon={
            <Icon
              type='material-community'
              name={showPassword ? 'eye-off-outline' : 'eye-outline'}
              size={24}
              color={theme.colors.primary}
              onPress={showHidePassword}
            />
          }
          onChangeText={(text) => formik.setFieldValue('password', text)}
          errorMessage={formik.errors.password}
        />
        <Input
          placeholder='Confirmar Contraseña'
          secureTextEntry={showPassword ? false : true}
          rightIcon={
            <Icon
              type='material-community'
              name={showPassword ? 'eye-off-outline' : 'eye-outline'}
              size={24}
              color={theme.colors.primary}
              onPress={showHidePassword}
            />
          }
          onChangeText={(text) => formik.setFieldValue('repeatPassword', text)}
          errorMessage={formik.errors.repeatPassword}
        />
        <View>
          <Button
            title='Crear Cuenta'
            onPress={formik.handleSubmit}
            loading={formik.isSubmitting}
          />

          <Text
            style={styles.text}
            onPress={() => navigation.navigate('login')}
          >
            Ya tienes cuenta? <Text style={styles.span}>Ingresa aqui</Text>
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterForm;
