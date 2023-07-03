import { View } from 'react-native';
import Header from '../../../../components/resume/header/Header';
import { styles } from './resumeScreen.styles';
import Checkout from '../../../../components/resume/checkout/Checkout';

const ResumeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Checkout />
    </View>
  );
};

export default ResumeScreen;
