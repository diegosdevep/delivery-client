import { View, Text } from 'react-native';
import { styles } from './paymentDetails.styles';

const PaymentDetails = ({ subTotal, total, envio }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalles de la compra</Text>

      <View style={styles.box}>
        <View style={styles.row}>
          <Text style={styles.text}>Subtotal</Text>
          <Text style={styles.text}>${subTotal}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.text}>Envio</Text>
          <Text style={styles.text}>${envio}</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.row}>
          <Text style={styles.total}>Total:</Text>
          <Text style={styles.total}>${total}</Text>
        </View>
      </View>
    </View>
  );
};

export default PaymentDetails;
