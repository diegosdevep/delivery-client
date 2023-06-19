import { View } from 'react-native';
import LoginForm from '../../../components/auth/login/LoginForm';
import { styles } from './loginScreen.styles';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <LoginForm />
    </View>
  );
};

export default LoginScreen;
