import { View, Text } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

const HeaderRigth = () => {
  const navigation = useNavigation();
  const routeName = useRoute().name;

  if (routeName === 'resume') {
    return null;
  }

  return (
    <View style={{ marginRight: 10 }}>
      <Ionicons
        name='cart-outline'
        size={24}
        color='yellow'
        onPress={() => navigation.navigate('resume')}
      />
    </View>
  );
};

export default HeaderRigth;
