import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../../theme/theme';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  title: {
    fontSize: theme.fontSize.md,
    fontWeight: theme.fontWeight.semiBold,
    color: theme.colors.blackMedium,
    marginHorizontal: 16,
    marginTop: 15,
  },
  scrollViewContent: {
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: 20,
    marginTop: 20,
    marginBottom: 5,
    marginHorizontal: 16,
  },
  card: {
    width: 175,
    backgroundColor: theme.colors.white,
    paddingBottom: 10,
    borderRadius: 10,
    ...theme.shadows.medium,
  },
  content: {
    marginHorizontal: 10,
    gap: 5,
  },
  restaurant: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 5,
  },
  footerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  img: {
    width: 155,
    height: 100,
    margin: 10,
    alignSelf: 'center',
    borderRadius: 10,
    resizeMode: 'cover',
  },
  iconBox: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: theme.colors.blackSoft,
    padding: 5,
    borderRadius: 10,
  },
  icon: {
    elevation: 0,
  },
});
