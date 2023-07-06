import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../../theme/theme';
const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    alignSelf: 'center',
  },
  box: {
    gap: 10,
  },
  title: {
    fontSize: theme.fontSize.lg,
    fontWeight: theme.fontWeight.semiBold,
    color: theme.colors.blackStrong,
  },
  envioBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 30,
    gap: 5,
  },
  envio: {
    fontSize: theme.fontSize.md,
    color: theme.colors.blackMedium,
  },
  boxComment: {
    padding: 20,
    backgroundColor: theme.colors.white,
    borderRadius: 5,
    height: 105,
    width: width * 0.9,
  },
  commentInput: {
    flex: 1,
  },
  img: {
    width: width * 0.95,
    height: 104,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
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
