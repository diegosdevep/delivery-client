import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import theme from '../../../../theme/theme';
import { styles } from './progressScreen.styles';

const ProgressScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const orderId = route.params.orderId;

  const handleNavigateHome = () => {
    navigation.reset({
      routes: [{ name: 'home' }],
    });
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.img}
        resizeMode='contain'
        source={require('../../../../../assets/ticket.png')}
      >
        <View style={styles.containerCheck}>
          <FontAwesome
            style={styles.check}
            name='check'
            size={40}
            color={theme.colors.white}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>Orden realizada con éxito!</Text>
          <Image
            style={styles.icon}
            source={require('../../../../../assets/orderIcon.png')}
          />
          <Text style={styles.subtitleText}>
            Tu orden ya fue enviada. En instantes te avisaremos en cuanto tiempo
            estará lista.
          </Text>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={styles.span}>Nª de orden: </Text>
            <Text>{orderId.slice(-8)}</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('ticketTab', {
                screen: 'lastTicket',
                params: {
                  orderId: orderId,
                },
              });
              handleNavigateHome();
            }}
          >
            <Text style={styles.buttonText}>
              <Text style={styles.buttonTextUnderline}>Seguir tu orden</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ProgressScreen;
