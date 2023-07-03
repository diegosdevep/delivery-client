import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../../theme/theme';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignSelf: 'center',
  },
  box: {
    width: width * 0.9,
    backgroundColor: theme.colors.white,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    borderRadius: 10,
    marginTop: 20,
    padding: 20,
    flexDirection: 'row',
  },
  img: {
    flex: 1,
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  content: {
    flex: 3,
    alignItems: 'flex-star',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: theme.fontSize.md,
    fontWeight: theme.fontWeight.semiBold,
    color: theme.colors.blackStrong,
    flexWrap: 'wrap',
  },
  ingredients: {
    fontSize: theme.fontSize.sm,
    fontWeight: theme.fontWeight.normal,
    color: theme.colors.blackMedium,
    marginLeft: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 20,
  },
  price: {
    flex: 1,
    fontSize: theme.fontSize.sm,
    fontWeight: theme.fontWeight.semiBold,
    color: theme.colors.blackStrong,
    marginTop: 7,
  },
  delete: {
    height: '100%',
  },
  textDelete: {
    fontSize: theme.fontSize.xl,
    fontWeight: theme.fontWeight.semiBold,
    color: theme.colors.blackSoft,
  },

  containerCounter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  btn: {
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
    borderRadius: 5,
  },
  textBtn: {
    fontSize: theme.fontSize.lg,
    color: theme.colors.white,
    ...theme.shadows.light,
  },
  text: {
    color: theme.colors.blackStrong,
    fontSize: theme.fontSize.md,
  },
});
