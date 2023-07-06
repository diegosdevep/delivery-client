import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import theme from '../../theme/theme';

const Counter = ({ quantity, onIncrement, onDecrement }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.7}
        onPress={onDecrement}
      >
        <Text style={styles.textBtn}>-</Text>
      </TouchableOpacity>

      <Text style={styles.text}>{quantity}</Text>

      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.7}
        onPress={onIncrement}
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
