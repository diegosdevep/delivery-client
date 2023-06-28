import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../../../theme/theme';
const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  logout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: width * 0.8,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderColor: theme.colors.danger,
    padding: 13,
    borderRadius: 10,
    gap: 10,
  },
  logoutText: {
    textAlign: 'center',
    fontSize: theme.fontSize.md,
    fontWeight: theme.fontWeight.bold,
    color: theme.colors.danger,
  },
});
