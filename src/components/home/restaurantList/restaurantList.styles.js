import { StyleSheet } from 'react-native';
import theme from '../../../theme/theme';

export const styles = StyleSheet.create({
  boxTitles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  title: {
    fontSize: theme.fontSize.md,
    fontWeight: theme.fontWeight.semiBold,
    color: theme.colors.blackMedium,
    marginHorizontal: 16,
    marginTop: 15,
  },
  scrollViewContent: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    paddingVertical: 10,
  },
  content: {
    padding: 10,
    gap: 5,
  },
  card: {
    width: 250,
    backgroundColor: theme.colors.white,
    paddingBottom: 10,
    borderRadius: 10,
    ...theme.shadows.medium,
  },
  img: {
    width: '100%',
    height: 110,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  restoTitle: {
    flexDirection: 'row',
    gap: 5,
  },
  description: {
    marginLeft: 20,
    fontSize: theme.fontSize.sm,
    color: theme.colors.blackMedium,
  },
  address: {
    color: theme.colors.blackMedium,
  },
});
