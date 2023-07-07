import { StyleSheet, Platform } from 'react-native';
import theme from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingTop: Platform.OS === 'android' ? 40 : 0,
  },
});
