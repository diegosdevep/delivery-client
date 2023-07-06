import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './information.styles';
import { useSelector } from 'react-redux';

const Information = () => {
  const platillo = useSelector((state) => state.pedido.platillo);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleToggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <View style={{ padding: 20 }}>
      {platillo && (
        <View>
          <View style={styles.row}>
            <Text style={styles.title}>{platillo.nombre}</Text>
            <View style={[styles.row, { gap: 10 }]}>
              <Image
                style={styles.img}
                source={require('../../../../assets/logoResto.png')}
              />
            </View>
          </View>

          <View>
            <View>
              <View style={styles.inline}>
                <Ionicons name='star' size={18} color={'#FFAB59'} />
                <View style={styles.inline}>
                  <Text style={styles.text}>2.5</Text>
                  <Text style={styles.text}>(236 comentarios)</Text>
                </View>
              </View>
            </View>
            <Text style={styles.descripcion}>
              {showFullDescription
                ? platillo.descripcion
                : platillo.descripcion.length > 100
                ? platillo.descripcion.slice(0, 100) + '...'
                : platillo.descripcion}
            </Text>
          </View>

          {platillo.descripcion.length > 100 && (
            <TouchableOpacity onPress={handleToggleDescription}>
              <Text>Ver {showFullDescription ? 'menos' : 'más'}</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

export default Information;
