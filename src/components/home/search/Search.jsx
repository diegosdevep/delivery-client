import { View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './search.styles';
import theme from '../../../theme/theme';

const Search = () => {
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <Ionicons name='search' size={24} color={theme.colors.blackSoft} />
        <TextInput
          placeholder='Busca comidas o restaurantes'
          placeholderTextColor={theme.colors.blackSoft}
        />
      </View>
      <View style={styles.icon}>
        <Ionicons
          name='filter-sharp'
          size={24}
          color={theme.colors.blackMedium}
        />
      </View>
    </View>
  );
};

export default Search;
