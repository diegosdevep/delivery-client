import { StyleSheet, Dimensions, Platform } from 'react-native';
import theme from '../../theme/theme';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingTop: Platform.OS === 'android' ? 40 : 0,
  },
  main: {},
});
