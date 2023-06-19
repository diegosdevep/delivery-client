import { View, Button } from 'react-native';
import { styles } from './registerScreen.styles';
import { useNavigation } from '@react-navigation/native';
import RegisterForm from '../../../components/auth/register/RegisterForm';

const RegisterScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <RegisterForm />
    </View>
  );
};

export default RegisterScreen;
