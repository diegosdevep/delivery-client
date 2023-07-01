import { View, Text, Image } from 'react-native';
import { styles } from './checkout.styles';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../../shared/Counter';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const Checkout = () => {
  const pedido = useSelector((state) => state.pedido.pedido);
  const navigation = useNavigation();
  const userToken = useSelector((state) => state.auth.userToken);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      {pedido.map((orden) => (
        <View style={styles.box} key={orden.id}>
          <Image source={{ uri: orden.imagen }} style={styles.img} />

          <View style={styles.content}>
            <Text style={styles.title}>{orden.nombre}</Text>
            <View>
              <Text style={styles.ingredients}>~ Ingredientes</Text>
              <Text style={styles.ingredients}>~ Ingredientes</Text>
            </View>
            <Text style={styles.price}>$3033</Text>
          </View>
        </View>
      ))}

      <Counter />
      <Text>X</Text>
    </View>
  );
};

export default Checkout;
