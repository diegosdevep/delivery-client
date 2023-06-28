import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { deletePedido, clearPedido } from '../../../../redux/pedidoReducer';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../../firebase/firebase';
import { format } from 'date-fns';

const ResumeScreen = () => {
  const navigation = useNavigation();
  const pedido = useSelector((state) => state.pedido.pedido);
  const userToken = useSelector((state) => state.auth.userToken);
  const dispatch = useDispatch();

  const date = new Date();
  const formattedDate = format(date, 'dd/MM/yyyy HH:mm:ss');

  const calcularTotalPedido = () => {
    let totalPedido = 0;
    pedido.forEach((item) => {
      totalPedido += item.total;
    });
    return totalPedido;
  };

  const totalPedido = calcularTotalPedido();

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
              total: Number(totalPedido),
              orden: pedido,
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
    <View>
      {pedido.length === 0 ? (
        <Text>Aún no tienes productos</Text>
      ) : (
        <>
          <Text>Total del pedido: {totalPedido}</Text>

          <Text>Lista de pedidos:</Text>
          {pedido.map((item) => (
            <View
              key={item.platillo.id}
              style={{
                backgroundColor: '#E5E5E5',
                padding: 10,
                marginVertical: 5,
              }}
            >
              <Text>Nombre: {item.platillo.nombre}</Text>
              <Text>Cantidad: {item.cantidad}</Text>
              <Text>Precio: {item.platillo.precio}</Text>
              <Text>id:{item.platillo.id}</Text>
              <Button
                title='Eliminar'
                onPress={() => handleEliminarPedido(item.platillo.id)}
              />
            </View>
          ))}

          <Button
            title='Seguir pidiendo'
            onPress={() => navigation.navigate('home')}
          />
          <Button title='Confirmar Orden' onPress={progressPedido} />
        </>
      )}
    </View>
  );
};

export default ResumeScreen;
