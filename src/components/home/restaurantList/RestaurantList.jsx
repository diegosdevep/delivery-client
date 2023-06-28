import { Image, ScrollView, TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native';
import { styles } from './restaurantList.styles';
import { restaurantes } from '../../../utils/restaurants';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../../theme/theme';
import { useNavigation } from '@react-navigation/native';

const RestaurantList = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.boxTitles}>
        <Text style={styles.title}>Restaurantes</Text>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() =>
            navigation.navigate('accountTab', { screen: 'account' })
          }
        >
          <Text style={styles.title}>Ver mas</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        {restaurantes.map((resto, index) => (
          <View key={index} style={styles.card}>
            <Image source={{ uri: resto.imagen }} style={styles.img} />

            <View style={styles.content}>
              <View style={styles.restoTitle}>
                <Ionicons
                  name='restaurant-sharp'
                  size={16}
                  color={theme.colors.blackMedium}
                />
                <Text>{resto.titulo.slice(0, 19)}</Text>
              </View>

              <Text style={styles.description}>
                {resto.descripcion.slice(0, 33)}
              </Text>

              <View style={styles.restoTitle}>
                <Ionicons
                  name='location-sharp'
                  size={16}
                  color={theme.colors.blackMedium}
                />
                <Text style={styles.address}>{resto.direccion}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default RestaurantList;
