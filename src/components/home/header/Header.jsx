import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './header.styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.address}>
        <Ionicons name='location-sharp' size={24} color='black' />
        <View>
          <Text style={styles.text}>Enviar a: </Text>
          <Text style={styles.textAddress}>
            Ferro Norte 989 Santa Rosa(LP){' '}
          </Text>
        </View>
      </View>
      <View>
        <Ionicons name='notifications-sharp' size={24} color='black' />
      </View>
    </View>
  );
};

export default Header;
