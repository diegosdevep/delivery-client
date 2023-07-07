import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../../../theme/theme';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  box: {
    backgroundColor: theme.colors.white,
    borderRadius: 5,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: theme.fontSize.md,
    fontWeight: theme.fontWeight.semiBold,
    color: theme.colors.blackStrong,
    marginBottom: 10,
  },
  divider: {
    borderWidth: 0.5,
    borderColor: theme.colors.orange,
    opacity: 0.4,
  },
  text: {
    fontSize: theme.fontSize.sm,
    fontWeight: theme.fontWeight.normal,
    color: theme.colors.blackMedium,
  },
  total: {
    fontSize: theme.fontSize.md,
    fontWeight: theme.fontWeight.semiBold,
    color: theme.colors.blackMedium,
  },
});
