import { StyleSheet } from 'react-native';
import theme from '../../../theme/theme';

export const styles = StyleSheet.create({
  box: {
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  order: {
    fontSize: theme.fontSize.md,
    fontWeight: theme.fontWeight.semiBold,
  },
});
