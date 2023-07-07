import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useSelector } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './progressScreen.styles';

const ProgressScreen = () => {
  const pedido = useSelector((state) => state.pedido.pedido);
  const navigation = useNavigation();

  const handleNavigateHome = () => {
    navigation.reset({
      routes: [{ name: 'home' }],
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerCheck}>
        <FontAwesome
          style={styles.check}
          name='check'
          size={40}
          color={theme.colors.white}
        />
      </View>
      <ImageBackground
        style={styles.img}
        resizeMode='contain'
        source={require('../../../../../assets/ticket.png')}
      >
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
          <Text style={styles.span}>Nª de orden: 123456</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('ticketTab', { screen: 'ticket' });
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

// import React, { useEffect, useState } from 'react';
// import { View, Text } from 'react-native';
// import { useRoute, useNavigation } from '@react-navigation/native';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchOrdenById } from '../../../../redux/ordersReducer';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import theme from '../../../../theme/theme';

// const ProgressScreen = () => {
//   const route = useRoute();
//   const dispatch = useDispatch();
//   const [completado, setCompletado] = useState(false);
//   const [tiempo, setTiempo] = useState(0);
//   const [countdown, setCountdown] = useState(0);
//   const [startTime, setStartTime] = useState(null);

//   const orderId = route.params.orderId;

//   const orders = useSelector((state) => state.orders.orders);

//   useEffect(() => {
//     if (orders) {
//       const { id, tiempoEntrega, completado } = orders;
//       if (id === orderId) {
//         setTiempo(tiempoEntrega);
//         setCompletado(completado);
//       }
//     }
//   }, [orders, orderId]);

//   useEffect(() => {
//     dispatch(fetchOrdenById(orderId));
//   }, [dispatch, orderId]);

//   useEffect(() => {
//     const loadStartTime = async () => {
//       try {
//         const storedStartTime = await AsyncStorage.getItem('startTime');
//         if (storedStartTime) {
//           setStartTime(parseInt(storedStartTime));
//         }
//       } catch (error) {
//         console.log('Error retrieving start time from storage:', error);
//       }
//     };

//     loadStartTime();
//   }, []);

//   useEffect(() => {
//     const saveStartTime = async () => {
//       try {
//         await AsyncStorage.setItem('startTime', String(startTime));
//       } catch (error) {
//         console.log('Error saving start time to storage:', error);
//       }
//     };

//     if (tiempo > 0 && !startTime) {
//       const currentTime = new Date().getTime();
//       setStartTime(currentTime);
//       saveStartTime();
//       setCountdown(tiempo * 60);
//     }
//   }, [tiempo, startTime]);

//   useEffect(() => {
//     if (countdown > 0) {
//       const timer = setInterval(() => {
//         const currentTime = new Date().getTime();
//         const elapsedSeconds = Math.floor((currentTime - startTime) / 1000);
//         const remainingSeconds = tiempo * 60 - elapsedSeconds;
//         setCountdown(remainingSeconds);
//       }, 1000);

//       return () => clearInterval(timer);
//     }
//   }, [countdown, startTime, tiempo]);

//   const minutes = Math.floor(countdown / 60);
//   const seconds = countdown % 60;

//   return (
//     <View>
//       {tiempo === 0 && (
//         <View>
//           <Text>Hemos recibido tu pedido</Text>
//           <Text>Estamos calculando el tiempo de entrega</Text>
//         </View>
//       )}
//       {!completado && tiempo > 0 && (
//         <View>
//           <Text>Su orden fue procesada. Llegará en {tiempo} minutos</Text>
//           <Text>
//             Tiempo restante: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
//           </Text>
//         </View>
//       )}
//       {completado && (
//         <Text>¡La orden ha sido completada! Pasa a recoger el pedido</Text>
//       )}
//     </View>
//   );
// };

// export default ProgressScreen;
