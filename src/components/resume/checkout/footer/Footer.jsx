import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { styles } from './footer.styles';

const Footer = ({ price, onPress }) => {
  return (
    <ImageBackground
      style={styles.img}
      source={require('../../../../../assets/orangeBg.png')}
    >
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.total}>Total</Text>
        <Text style={styles.price}>${price}</Text>
      </View>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text style={styles.textBtn}>Pagar</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Footer;
