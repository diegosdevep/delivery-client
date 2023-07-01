// Counter.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import theme from '../../theme/theme';

const Counter = () => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.7}
        onPress={decrementQuantity}
      >
        <Text style={styles.textBtn}>-</Text>
      </TouchableOpacity>

      <Text style={styles.text}>{quantity}</Text>

      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.7}
        onPress={incrementQuantity}
      >
        <Text style={styles.textBtn}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  btn: {
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
    borderRadius: 5,
  },
  textBtn: {
    fontSize: theme.fontSize.lg,
    color: theme.colors.white,
    ...theme.shadows.light,
  },
  text: {
    color: theme.colors.blackStrong,
    fontSize: theme.fontSize.md,
  },
});

export default Counter;
