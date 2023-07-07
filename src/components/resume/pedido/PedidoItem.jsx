import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Counter from '../../shared/Counter';
import { styles } from './pedido.styles';

const PedidoItem = ({
  orden,
  quantity,
  incrementQuantity,
  decrementQuantity,
  handleEliminarPedido,
}) => {
  if (!orden || !orden.platillo) {
    throw new Error(
      'Error en el componente PedidoItem: orden o orden.platillo es nulo'
    );
  }

  return (
    <View style={styles.box}>
      <Image style={styles.img} source={{ uri: orden?.platillo?.imagen }} />

      <View style={styles.content}>
        <Text>{orden?.platillo?.nombre}</Text>

        <View style={styles.content}>
          <Text style={styles.ingredients}>~ Ingredientes</Text>
          <Text style={styles.ingredients}>~ Ingredientes</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.price}>
            ${(orden?.platillo?.precio * (quantity || 1)).toFixed(2)}
          </Text>
          <Counter
            quantity={quantity || 1}
            onIncrement={incrementQuantity}
            onDecrement={decrementQuantity}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.delete}
        onPress={() => handleEliminarPedido(orden?.platillo?.id)}
      >
        <Text style={styles.textDelete}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PedidoItem;
