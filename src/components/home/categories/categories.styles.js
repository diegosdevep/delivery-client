import { StyleSheet } from 'react-native';
import theme from '../../../theme/theme';

export const styles = StyleSheet.create({
  title: {
    fontSize: theme.fontSize.md,
    fontWeight: theme.fontWeight.semiBold,
    color: theme.colors.blackStrong,
    marginVertical: 5,
    marginHorizontal: 16,
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 10,
    gap: 10,
  },
  boxCategorie: {
    backgroundColor: theme.colors.orange2,
    borderRadius: 50,
    padding: 10,
    marginVertical: 5,
    ...theme.shadows.light,
  },
  categoryContainer: {
    width: 60,
    height: 60,
    backgroundColor: theme.colors.white,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
});
