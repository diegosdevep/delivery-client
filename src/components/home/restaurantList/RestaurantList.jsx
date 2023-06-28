import { View, Text } from 'react-native';
import { styles } from './restaurantList.styles';

const RestaurantList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxTitles}>
        <Text style={styles.title}>Restaurantes</Text>
        <Text style={styles.title}>Ver mas</Text>
      </View>
    </View>
  );
};

export default RestaurantList;
