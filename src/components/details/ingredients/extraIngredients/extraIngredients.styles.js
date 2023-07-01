import { StyleSheet } from 'react-native';
import theme from '../../../../theme/theme';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  subtitle: {
    fontSize: theme.fontSize.md,
    fontWeight: theme.fontWeight.semiBold,
    color: theme.colors.blackStrong,
    marginTop: 25,
  },
  icon: {
    marginTop: 20,
    marginRight: 20,
  },
  text: {
    fontSize: theme.fontSize.md,
    fontWeight: theme.fontWeight.lightBold,
    color: theme.colors.blackMedium,
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
