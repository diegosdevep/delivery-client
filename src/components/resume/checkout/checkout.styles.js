import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../../theme/theme';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    backgroundColor: theme.colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 20,
    padding: 15,
  },
  box: {
    flexDirection: 'row',
    gap: 15,
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  content: {
    gap: 7,
  },
  title: {
    fontSize: theme.fontSize.md,
    fontWeight: theme.fontWeight.semiBold,
    color: theme.colors.blackStrong,
  },
  ingredients: {
    fontSize: theme.fontSize.sm,
    fontWeight: theme.fontWeight.normal,
    color: theme.colors.blackMedium,
    marginLeft: 10,
  },
  price: {
    fontSize: theme.fontSize.sm,
    fontWeight: theme.fontWeight.semiBold,
    color: theme.colors.blackStrong,
    marginTop: 7,
  },
});
