import React, { useState } from 'react';
import { View, Text, Image, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setPedido } from '../../../../redux/pedidoReducer';
import { useNavigation } from '@react-navigation/native';

const DetailsScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const platillo = useSelector((state) => state.pedido.platillo);
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const total = platillo ? quantity * platillo.precio : 0;

  const addToPedido = () => {
    const pedidoData = {
      platillo,
      cantidad: quantity,
      total,
    };
    dispatch(setPedido(pedidoData));
    navigation.navigate('resume');
  };

  return (
    <View>
      <Text>DetailsScreen</Text>
      {platillo && (
        <View>
          <Text>Nombre: {platillo.nombre}</Text>
          <Text>Descripción: {platillo.descripcion}</Text>
          <Text>Precio: {platillo.precio}</Text>
          <Image
            source={{ uri: platillo?.imagen }}
            style={{ width: 100, height: 100 }}
          />
          <Button title='+' onPress={incrementQuantity} />
          <Text>Cantidad: {quantity}</Text>
          <Button title='-' onPress={decrementQuantity} />
          <Text>Total: {total}</Text>
          <Button title='Agregar al pedido' onPress={addToPedido} />
        </View>
      )}
    </View>
  );
};

export default DetailsScreen;
