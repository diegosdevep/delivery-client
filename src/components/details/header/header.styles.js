import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../../theme/theme';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  img: {
    width: width,
    height: '100%',
    opacity: 0.7,
    resizeMode: 'contain',
    bottom: '30%',
  },
  iconChevron: {
    position: 'absolute',
    top: 50,
    left: 10,
    backgroundColor: theme.colors.blackMedium,
    padding: 7,
    borderRadius: 50,
    borderWidth: 0.3,
    borderColor: theme.colors.white,
  },
  iconHeart: {
    position: 'absolute',
    top: 50,
    right: 10,
    zIndex: 2,
    backgroundColor: theme.colors.blackMedium,
    padding: 8,
    borderRadius: 50,
    borderWidth: 0.3,
    borderColor: theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
