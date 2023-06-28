import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../../theme/theme';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  card: {
    width: width * 0.7,
    height: height * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  titulo: {
    color: 'rgba(0,0,0,0.6)',
    fontSize: theme.fontSize.h2,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeight.bold,
  },
  subtitulo: {
    color: 'rgba(0,0,0,0.6)',
    fontSize: theme.fontSize.md,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeight.normal,
  },
});
