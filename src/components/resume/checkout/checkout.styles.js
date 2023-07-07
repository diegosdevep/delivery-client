import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../../theme/theme';
const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    gap: 10,
    marginBottom: 30,
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
    width: width * 0.95,
  },
  commentInput: {
    flex: 1,
  },
});
