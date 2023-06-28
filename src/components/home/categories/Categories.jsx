import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './categories.styles';
import { categories } from '../../../utils/categories';
import { ScrollView } from 'react-native';

const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Busqueda por categoria</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        {categories.map((categoria) => (
          <TouchableOpacity
            key={categoria.id}
            style={styles.boxCategorie}
            activeOpacity={0.7}
            onPress={() => console.log('hola')}
          >
            <View style={styles.categoryContainer}>
              <Image source={categoria.imagen} style={styles.image} />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;
