import { StyleSheet, Dimensions, Platform } from 'react-native';
import theme from '../../../../theme/theme';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerCheck: {
    position: 'absolute',
    backgroundColor: theme.colors.orange,
    borderRadius: 100,
    padding: 20,
    zIndex: 2,
    top: 100,
    ...Platform.select({
      android: {
        elevation: 5,
      },
      ios: {
        shadowColor: theme.colors.orange,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 1,
        shadowRadius: 20,
      },
    }),
  },
  check: {
    ...Platform.select({
      android: {
        elevation: 2,
      },
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
    }),
  },
  img: {
    width: width,
    height: height * 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    width: width * 0.6,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  icon: {
    width: 100,
    height: 100,
  },
  titleText: {
    fontSize: theme.fontSize.md,
    fontWeight: theme.fontWeight.bold,
    color: theme.colors.blackMedium,
    marginBottom: 10,
  },
  subtitleText: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.blackMedium,
    marginBottom: 10,
  },
  span: {
    fontSize: theme.fontSize.md,
    fontWeight: theme.fontWeight.semiBold,
    color: theme.colors.blackMedium,
  },
  button: {
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: theme.fontSize.lg,
    fontWeight: theme.fontWeight.bold,
    color: theme.colors.orange,
  },
  buttonTextUnderline: {
    textDecorationLine: 'underline',
    textDecorationColor: theme.colors.orange,
  },
});
