import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../../theme/theme';
import { styles } from './header.styles';
import { useSelector } from 'react-redux';

const Header = () => {
  const platillo = useSelector((state) => state.pedido.platillo);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={{ uri: platillo?.imagen }} style={styles.img} />

      <TouchableOpacity
        style={styles.iconChevron}
        activeOpacity={0.7}
        onPress={() => navigation.goBack()}
      >
        <Ionicons
          name='ios-chevron-back-sharp'
          size={30}
          color={theme.colors.white}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconHeart} activeOpacity={0.7}>
        <Ionicons name='heart-outline' size={30} color={theme.colors.white} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
