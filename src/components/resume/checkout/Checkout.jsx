import React, { useEffect, useState } from 'react';
import { Text, ScrollView, Alert, TextInput, View, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import { addDoc, collection } from 'firebase/firestore';
import { clearPedido, deletePedido } from '../../../redux/pedidoReducer';
import { db } from '../../../firebase/firebase';
import { styles } from './checkout.styles';
import PedidoItem from '../pedido/PedidoItem';
import Footer from './footer/Footer';
import PaymentDetails from './paymentDetails/PaymentDetails';

const Checkout = () => {
  const pedido = useSelector((state) => state.pedido.pedido);
  const userToken = useSelector((state) => state.auth.userToken);
  const [quantities, setQuantities] = useState({});
  const [shipping, setShipping] = useState(false);
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
              total: total,
              comentario: comment,
              creado: formattedDate,
              userId: userToken,
              envio: shipping,
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

  const subTotal = Number(calcularPrecioTotal().toFixed(2));
  const envio = Number(550);
  const total = subTotal + envio;

  useEffect(() => {
    const initialQuantities = pedido.reduce((acc, orden) => {
      acc[orden.platillo.id] = 1;
      return acc;
    }, {});

    setQuantities(initialQuantities);
  }, [pedido]);

  return (
    <View style={{ flex: 1, alignSelf: 'center' }}>
      {pedido.length > 0 ? (
        <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {pedido?.map((orden) => (
              <PedidoItem
                key={orden?.platillo?.id}
                orden={orden}
                quantity={quantities[orden?.platillo?.id]}
                incrementQuantity={() => incrementQuantity(orden?.platillo?.id)}
                decrementQuantity={() => decrementQuantity(orden?.platillo?.id)}
                handleEliminarPedido={() =>
                  handleEliminarPedido(orden?.platillo?.id)
                }
              />
            ))}

            <View style={styles.envioBox}>
              <Switch
                value={shipping}
                onValueChange={(value) => setShipping(value)}
              />
              <Text style={styles.envio}>Solicitar Envio</Text>
            </View>

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

            <PaymentDetails subTotal={subTotal} envio={envio} total={total} />
          </ScrollView>
          <Footer price={total} onPress={progressPedido} />
        </View>
      ) : (
        <Text>No tienes productos en el pedido</Text>
      )}
    </View>
  );
};

export default Checkout;
