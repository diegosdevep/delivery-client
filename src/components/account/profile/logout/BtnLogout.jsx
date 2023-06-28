import { Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import theme from '../../../../theme/theme';
import { styles } from './btnLogout.styles';

const BtnLogout = ({ onPress, title }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.logout}
      activeOpacity={0.7}
    >
      <MaterialIcons name='logout' size={24} color={theme.colors.danger} />
      <Text style={styles.logoutText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default BtnLogout;
