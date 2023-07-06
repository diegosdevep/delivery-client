import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../../theme/theme';
const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignSelf: 'center',
  },
  box: {
    marginVertical: 60,
    gap: 10,
  },
  title: {
    fontSize: theme.fontSize.lg,
    fontWeight: theme.fontWeight.semiBold,
    color: theme.colors.blackStrong,
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
});
