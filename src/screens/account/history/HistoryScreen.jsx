import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../../redux/userReducer';
import { fetchOrdenes } from '../../../redux/ordersReducer';

const HistoryScreen = () => {
  const dispatch = useDispatch();
  const userToken = useSelector((state) => state.auth.userToken);
  const ordenes = useSelector((state) => state.orders.orders);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  useEffect(() => {
    dispatch(fetchOrdenes());
  }, []);

  const ordenesFiltradas = ordenes
    ? ordenes.filter((orden) => orden.userId === userToken)
    : [];

  return (
    <View>
      {ordenesFiltradas.map((orden) => (
        <View key={orden.id}>
          <Text>Orden ID: {orden.id}</Text>
          <Text>Total: {orden.total}</Text>
          {/* Acceder al nombre de cada objeto */}
          {orden.orden.map((e) => console.log(e.platillo))}
          {orden.orden.map((e, index) => (
            <Text key={e.platillo.id}>Nombre: {e.platillo.nombre}</Text>
          ))}
        </View>
      ))}
      {/* Mostrar la información del usuario */}
      {/* <Text>User Token: {userToken}</Text> */}
    </View>
  );
};

export default HistoryScreen;
