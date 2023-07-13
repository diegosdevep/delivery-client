import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrdenes } from '../../../redux/ordersReducer';
import { styles } from './historyticket.styles';

const HistoryTicketsScreen = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.orders);
  const userToken = useSelector((state) => state.auth.userToken);

  useEffect(() => {
    dispatch(fetchOrdenes());
  }, [dispatch]);

  console.log(orders);

  let filteredOrders = [];

  if (orders && Array.isArray(orders)) {
    filteredOrders = orders.filter((order) => order?.userId === userToken);
  }

  return (
    <View style={{ marginTop: 30 }}>
      {filteredOrders.map((order) => (
        <View style={styles.box} key={order.id}>
          <View style={styles.row}>
            <Text style={styles.order}>Nª de orden:{order.id.slice(-8)}</Text>
            <Text>{order.creado}</Text>
          </View>

          <View>
            <Image />
            <View>
              <Text></Text>
            </View>
          </View>
          <Text>ID de Orden: {order.total}</Text>

          <Text>ID de Orden: {order.tiempoEntrega}</Text>
        </View>
      ))}
    </View>
  );
};

export default HistoryTicketsScreen;
