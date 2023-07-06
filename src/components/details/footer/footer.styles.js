import { StyleSheet } from 'react-native';
import theme from '../../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: theme.colors.white,
  },
  box: {
    marginLeft: 30,
    alignItems: 'center',
  },
  price: {
    fontWeight: theme.fontWeight.bold,
    color: theme.colors.success,
    fontSize: theme.fontSize.lg,
  },
  total: {
    fontSize: theme.fontSize.lg,
    fontWeight: theme.fontWeight.semiBold,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: 10,
    width: 250,
    height: 50,
    backgroundColor: theme.colors.blackStrong,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBtn: {
    color: theme.colors.white,
    fontWeight: theme.fontWeight.semiBold,
    fontSize: theme.fontSize.md,
  },
});
