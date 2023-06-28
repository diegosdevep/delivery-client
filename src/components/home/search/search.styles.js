import { StyleSheet } from 'react-native';
import theme from '../../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
    marginHorizontal: 16,
    gap: 20,
  },
  input: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
    backgroundColor: theme.colors.white,
    padding: 10,
    borderRadius: 7,
    ...theme.shadows.light,
  },
  icon: {
    backgroundColor: theme.colors.white,
    padding: 10,
    borderRadius: 7,
    ...theme.shadows.light,
  },
});
