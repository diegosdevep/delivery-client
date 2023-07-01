import { View, Text, SafeAreaView } from 'react-native';
import { styles } from './header.styles';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

const Header = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.goBack}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('home')}
        >
          <Ionicons name='chevron-back' size={28} color='black' />
        </TouchableOpacity>
        <Text style={styles.text}>Volver al menu </Text>
      </View>
      <View>
        <Ionicons name='notifications-sharp' size={24} color='black' />
      </View>
    </SafeAreaView>
  );
};

export default Header;
