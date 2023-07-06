import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { styles } from './lomaspedido.styles';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  fetchProductos,
  subscribeToProductos,
} from '../../../redux/firebaseReducer';
import { setPlatillo } from '../../../redux/pedidoReducer';
import theme from '../../../theme/theme';

const LoMasPedido = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const menu = useSelector((state) => state.firebase.menu);
  const status = useSelector((state) => state.firebase.status);
  const error = useSelector((state) => state.firebase.error);

  useEffect(() => {
    dispatch(fetchProductos());
    const unsubscribe = dispatch(subscribeToProductos());
    return () => {
      unsubscribe();
    };
  }, []);

  const handleProductPress = (producto) => {
    dispatch(setPlatillo(producto));
    navigation.navigate('details');
  };

  if (status === 'loading') {
    return <Text>Loading...</Text>;
  }

  if (status === 'failed') {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View>
      <Text style={styles.title}>Lo mas pedido de la semana</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        {menu.map((producto) =>
          producto.existencia ? (
            <View key={producto.id} style={styles.card}>
              <Image source={{ uri: producto.imagen }} style={styles.img} />
              <TouchableOpacity style={styles.iconBox} activeOpacity={0.7}>
                <Ionicons
                  name='heart-outline'
                  size={24}
                  color={theme.colors.white}
                />
              </TouchableOpacity>

              <View style={styles.content}>
                <Text style={styles.textName}>
                  {producto.nombre.slice(0, 19)}
                </Text>
                <View style={styles.restaurant}>
                  <Ionicons
                    name='restaurant-sharp'
                    size={16}
                    color={theme.colors.blackMedium}
                  />
                  <Text style={styles.textResto}>Los Caldenes</Text>
                </View>
                <View style={styles.footerCard}>
                  <Text style={styles.price}>
                    $ {producto.precio.toFixed(2)}
                  </Text>
                  <TouchableOpacity
                    onPress={() => handleProductPress(producto)}
                    activeOpacity={0.7}
                  >
                    <MaterialCommunityIcons
                      name='plus-circle'
                      size={28}
                      style={styles.icon}
                      color={theme.colors.orange}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ) : null
        )}
      </ScrollView>
    </View>
  );
};

export default LoMasPedido;
