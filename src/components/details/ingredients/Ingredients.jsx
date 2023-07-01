import { View, ScrollView, TouchableOpacity, Image, Text } from 'react-native';
import { ingredientes } from '../../../utils/ingredientes';
import { styles } from './ingredientes.styles';

const Ingredients = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewContent}
    >
      {ingredientes.map((ingrediente) => (
        <View style={styles.box} key={ingrediente.id}>
          <TouchableOpacity
            style={styles.boxIngrediente}
            activeOpacity={0.7}
            onPress={() => console.log('Filtrando por ingrediente')}
          >
            <View style={styles.ingredientContainer}>
              <Image source={{ uri: ingrediente.img }} style={styles.image} />
            </View>
          </TouchableOpacity>
          {/* <Text style={styles.text}>{ingrediente.nombre}</Text> */}
        </View>
      ))}
    </ScrollView>
  );
};

export default Ingredients;
