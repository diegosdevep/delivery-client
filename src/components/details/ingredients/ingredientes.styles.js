import { StyleSheet } from 'react-native';
import theme from '../../../theme/theme';

export const styles = StyleSheet.create({
  title: {
    fontSize: theme.fontSize.md,
    fontWeight: theme.fontWeight.semiBold,
    color: theme.colors.blackMedium,
    marginVertical: 5,
    marginHorizontal: 16,
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    gap: 10,
    paddingVertical: 10,
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxIngrediente: {
    backgroundColor: theme.colors.orange2,
    borderRadius: 50,
    padding: 8,
    ...theme.shadows.light,
  },
  ingredientContainer: {
    width: 50,
    height: 50,
    backgroundColor: theme.colors.white,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  text: {
    fontSize: theme.fontSize.sm,
    marginTop: 5,
  },
});
