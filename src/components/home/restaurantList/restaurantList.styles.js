import { StyleSheet } from 'react-native';
import theme from '../../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
  boxTitles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: theme.fontSize.md,
    fontWeight: theme.fontWeight.semiBold,
    color: theme.colors.blackMedium,
    marginHorizontal: 16,
    marginTop: 20,
  },
});
