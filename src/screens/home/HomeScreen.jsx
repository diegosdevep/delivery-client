import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProductos,
  subscribeToProductos,
} from '../../redux/firebaseReducer';
import { useNavigation } from '@react-navigation/native';
import { setPlatillo } from '../../redux/pedidoReducer';
import { styles } from './homeScreen.styles';
import Header from '../../components/home/header/Header';
import Search from '../../components/home/search/Search';
import Categories from '../../components/home/categories/Categories';
import LoMasPedido from '../../components/home/lomaspedido/LoMasPedido';
import RestaurantList from '../../components/home/restaurantList/RestaurantList';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [showFullDescription, setShowFullDescription] = useState(false);

  // const menu = useSelector((state) => state.firebase.menu);
  // const status = useSelector((state) => state.firebase.status);
  // const error = useSelector((state) => state.firebase.error);

  // useEffect(() => {
  //   dispatch(fetchProductos());
  //   const unsubscribe = dispatch(subscribeToProductos());

  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  // const handleProductPress = (producto) => {
  //   dispatch(setPlatillo(producto));
  //   navigation.navigate('details');
  // };

  // const handleToggleDescription = () => {
  //   setShowFullDescription(!showFullDescription);
  // };

  // if (status === 'loading') {
  //   return <Text>Loading...</Text>;
  // }

  // if (status === 'failed') {
  //   return <Text>Error: {error}</Text>;
  // }

  return (
    <ScrollView style={styles.container}>
      <Header />
      <Search />
      <Categories />
      <LoMasPedido />
      <RestaurantList />

      {/* {menu.map((producto) =>
        producto.existencia ? (
          <TouchableOpacity
            key={producto.id}
            style={{ backgroundColor: 'gray', margin: 10 }}
            onPress={() => handleProductPress(producto)}
          >
            <Image
              source={{ uri: producto.imagen }}
              style={{ width: 100, height: 100 }}
            />
            <Text>{producto.nombre}</Text>
            {showFullDescription ? (
              <Text>{producto.descripcion}</Text>
            ) : (
              <Text>
                {producto.descripcion.length > 50
                  ? producto.descripcion.slice(0, 50) + '...'
                  : producto.descripcion}
              </Text>
            )}
            {producto.descripcion.length > 50 && (
              <TouchableOpacity onPress={handleToggleDescription}>
                <Text>Ver {showFullDescription ? 'menos' : 'más'}</Text>
              </TouchableOpacity>
            )}
            <Text>{producto.precio}</Text>
          </TouchableOpacity>
        ) : null
      )} */}
    </ScrollView>
  );
};

export default HomeScreen;
