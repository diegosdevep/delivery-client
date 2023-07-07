import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './categories.styles';
import { categories } from '../../../utils/categories';
import { ScrollView } from 'react-native';

const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Busqueda por categoria</Text>

      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}
        >
          <View style={{ marginHorizontal: 10, flexDirection: 'row', gap: 10 }}>
            {categories.map((categoria) => (
              <TouchableOpacity
                key={categoria.id}
                style={styles.boxCategorie}
                activeOpacity={0.7}
                onPress={() => console.log('Filtrando por Categoria')}
              >
                <View style={styles.categoryContainer}>
                  <Image source={categoria.imagen} style={styles.image} />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Categories;
