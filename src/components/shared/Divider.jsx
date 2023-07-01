import { View, StyleSheet } from 'react-native';

const Divider = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    width: '85%',
    borderWidth: 0.4,
    alignSelf: 'center',
    borderColor: 'rgba(0,0,0,0.1)',
  },
});

export default Divider;
