import { StyleSheet } from 'react-native';
import theme from '../../../theme/theme';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: theme.fontSize.lg,
    fontWeight: theme.fontWeight.semiBold,
  },
  price: {
    fontSize: theme.fontSize.md,
    fontWeight: theme.fontWeight.semiBold,
  },
  img: {
    width: 50,
    height: 50,
  },
  inline: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 5,
  },
  text: {
    color: theme.colors.blackMedium,
    marginVertical: 10,
  },
  descripcion: {
    color: theme.colors.blackStrong,
  },
});
