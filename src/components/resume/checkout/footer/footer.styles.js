import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../../../theme/theme';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  img: {
    width: width * 0.95,
    height: 104,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    marginVertical: 5,
  },
  btn: {
    width: 222,
    height: 46,
    backgroundColor: theme.colors.orange,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBtn: {
    color: theme.colors.white,
    fontSize: theme.fontSize.md,
    fontWeight: theme.fontWeight.semiBold,
  },
  price: {
    color: theme.colors.success,
    fontSize: theme.fontSize.lg,
    fontWeight: theme.fontWeight.bold,
  },
  total: {
    color: theme.colors.blackMedium,
    fontSize: theme.fontSize.lg,
    fontWeight: theme.fontWeight.bold,
  },
});
