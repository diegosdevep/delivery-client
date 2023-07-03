import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import { addDoc, collection } from 'firebase/firestore';
import { clearPedido, deletePedido } from '../../../redux/pedidoReducer';
import { db } from '../../../firebase/firebase';
import { styles } from './checkout.styles';

const Checkout = () => {
  const pedido = useSelector((state) => state.pedido.pedido);
  const userToken = useSelector((state) => state.auth.userToken);
  const [quantities, setQuantities] = useState({});
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const incrementQuantity = (id) => {
    setQuantities((prevQuantities) => {
      const newQuantities = { ...prevQuantities };
      newQuantities[id] = (newQuantities[id] || 0) + 1;
      return newQuantities;
    });
  };

  const decrementQuantity = (id) => {
    setQuantities((prevQuantities) => {
      if (prevQuantities[id] > 1) {
        const newQuantities = { ...prevQuantities };
        newQuantities[id] = prevQuantities[id] - 1;
        return newQuantities;
      }
      return prevQuantities;
    });
  };

  const handleEliminarPedido = (id) => {
    Alert.alert(
      'Confirmar eliminación',
      '¿Estás seguro de que deseas eliminar este pedido?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: () => {
            dispatch(deletePedido(id));
          },
        },
      ]
    );
  };

  const date = new Date();
  const formattedDate = format(date, 'dd/MM/yyyy HH:mm:ss');

  const calcularPrecioTotal = () => {
    return pedido.reduce((total, orden) => {
      const cantidad = quantities[orden?.platillo?.id] || 1;
      return total + orden.platillo.precio * cantidad;
    }, 0);
  };

  const progressPedido = async () => {
    Alert.alert(
      'Revisa tu pedido',
      'Una vez realizado el pedido, no podrás cambiarlo',
      [
        {
          text: 'Confirmar',
          onPress: async () => {
            const pedidoObj = {
              tiempoEntrega: 0,
              completado: false,
              orden: pedido.map((orden) => ({
                ...orden,
                cantidad: quantities[orden?.platillo?.id] || 1,
              })),
              total: calcularPrecioTotal(),
              creado: formattedDate,
              userId: userToken,
            };
            const docRef = await addDoc(collection(db, 'ordenes'), pedidoObj);
            const orderId = docRef.id;

            navigation.navigate('progress', { orderId, pedidoObj });
            dispatch(clearPedido());
          },
        },
        {
          text: 'Revisar',
          style: 'cancel',
        },
      ]
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {pedido.map((orden) => (
        <View style={styles.box} key={orden?.platillo?.id}>
          <Image source={{ uri: orden?.platillo?.imagen }} style={styles.img} />

          <View style={styles.content}>
            <Text style={styles.title}>{orden?.platillo?.nombre}</Text>

            <View>
              <Text style={styles.ingredients}>~ Ingredientes</Text>
              <Text style={styles.ingredients}>~ Ingredientes</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.price}>
                $
                {(
                  orden?.platillo?.precio *
                  (quantities[orden?.platillo?.id] || 1)
                ).toFixed(2)}
              </Text>

              <View style={styles.containerCounter}>
                <TouchableOpacity
                  style={styles.btn}
                  activeOpacity={0.7}
                  onPress={() => decrementQuantity(orden?.platillo?.id)}
                >
                  <Text style={styles.textBtn}>-</Text>
                </TouchableOpacity>

                <Text style={styles.text}>
                  {quantities[orden?.platillo?.id] || 1}
                </Text>

                <TouchableOpacity
                  style={styles.btn}
                  activeOpacity={0.7}
                  onPress={() => incrementQuantity(orden?.platillo?.id)}
                >
                  <Text style={styles.textBtn}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.delete}
            onPress={() => handleEliminarPedido(orden?.platillo?.id)}
          >
            <Text style={styles.textDelete}>X</Text>
          </TouchableOpacity>
        </View>
      ))}
      <Text>{calcularPrecioTotal()}</Text>
      <Button title='Pedir' onPress={progressPedido} />
    </ScrollView>
  );
};

export default Checkout;
