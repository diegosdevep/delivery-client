import { StyleSheet } from 'react-native';
import theme from '../../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
  title: {
    fontSize: theme.fontSize.md,
    fontWeight: theme.fontWeight.semiBold,
    color: theme.colors.blackMedium,
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 10,
    gap: 10,
    margin: 10,
  },
  boxCategorie: {
    backgroundColor: '#F5F5F4',
    borderRadius: 50,
    padding: 10,
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
