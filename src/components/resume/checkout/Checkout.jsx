import React, { useEffect, useState } from 'react';
import { Text, ScrollView, Button, Alert, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import { addDoc, collection } from 'firebase/firestore';
import { clearPedido, deletePedido } from '../../../redux/pedidoReducer';
import { db } from '../../../firebase/firebase';
import { styles } from './checkout.styles';
import PedidoItem from '../pedido/PedidoItem';

const Checkout = () => {
  const pedido = useSelector((state) => state.pedido.pedido);
  const userToken = useSelector((state) => state.auth.userToken);
  const [quantities, setQuantities] = useState({});
  const [comment, setComment] = useState('');
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
              comentario: comment,
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

  useEffect(() => {
    const initialQuantities = pedido.reduce((acc, orden) => {
      acc[orden.platillo.id] = 1;
      return acc;
    }, {});
    setQuantities(initialQuantities);
  }, [pedido]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {pedido.map((orden) => (
        <PedidoItem
          key={orden?.platillo?.id}
          orden={orden}
          quantity={quantities[orden?.platillo?.id]}
          incrementQuantity={() => incrementQuantity(orden?.platillo?.id)}
          decrementQuantity={() => decrementQuantity(orden?.platillo?.id)}
          handleEliminarPedido={() => handleEliminarPedido(orden?.platillo?.id)}
        />
      ))}
      {/* <Text>{calcularPrecioTotal()}</Text> */}

      <View style={styles.box}>
        <Text style={styles.title}>Comentarios Adicionales</Text>
        <View style={styles.boxComment}>
          <TextInput
            style={styles.commentInput}
            placeholder='Escribe aqui si necesitas comentar algo extra sobre tu menu.'
            value={comment}
            onChangeText={setComment}
            multiline={true}
            numberOfLines={4}
          />
        </View>
      </View>

      <Button title='Pedir' onPress={progressPedido} />
    </ScrollView>
  );
};

export default Checkout;
