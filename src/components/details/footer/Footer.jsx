import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './footer.styles';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { setPedido } from '../../../redux/pedidoReducer';

const Footer = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const platillo = useSelector((state) => state.pedido.platillo);

  const addToPedido = () => {
    const nuevoPedido = {
      platillo: platillo,
      cantidad: 1,
    };
    dispatch(setPedido(nuevoPedido));
    navigation.navigate('resume');
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.total}>Total</Text>
        <Text style={styles.price}>$ {platillo?.precio}</Text>
      </View>

      <TouchableOpacity
        style={styles.btn}
        onPress={addToPedido}
        activeOpacity={0.7}
      >
        <Ionicons name='ios-cart-sharp' size={24} color='white' />
        <Text style={styles.textBtn}>Agregar al carrito</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
