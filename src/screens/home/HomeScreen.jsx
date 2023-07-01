import { ScrollView } from 'react-native';
import { styles } from './homeScreen.styles';
import Header from '../../components/home/header/Header';
import Search from '../../components/home/search/Search';
import Categories from '../../components/home/categories/Categories';
import LoMasPedido from '../../components/home/lomaspedido/LoMasPedido';
import RestaurantList from '../../components/home/restaurantList/RestaurantList';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <Search />
      <Categories />
      <LoMasPedido />
      <RestaurantList />
    </ScrollView>
  );
};

export default HomeScreen;
