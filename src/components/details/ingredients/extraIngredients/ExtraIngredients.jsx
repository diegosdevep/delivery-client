import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './extraIngredients.styles';
import theme from '../../../../theme/theme';
import Divider from '../../../shared/Divider';

const ExtraIngredients = () => {
  const [showIngredients, setShowIngredients] = useState(true);
  const [checkedIngredients, setCheckedIngredients] = useState({});

  const ingredientsList = [
    {
      id: 1,
      name: 'lechuga',
      label: 'Extra lechuga',
      imageUri:
        'https://images.unsplash.com/photo-1622205313162-be1d5712a43f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGVjaHVnYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
      precio: '$210',
    },
    {
      id: 2,
      name: 'cebolla',
      label: 'Extra cebolla',
      imageUri:
        'https://images.unsplash.com/photo-1587735243474-5426387356db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNlYm9sbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      precio: '$350',
    },
    {
      id: 3,
      name: 'pepino',
      label: 'Extra pepino',
      imageUri:
        'https://images.unsplash.com/photo-1627981906592-ae3f0ee9486d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcGlub3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
      precio: '$280',
    },
  ];

  const handleToggleIngredients = () => {
    setShowIngredients(!showIngredients);
  };

  const handleToggleCheckbox = (ingredient) => {
    setCheckedIngredients((prevState) => {
      const updatedIngredients = { ...prevState };
      if (updatedIngredients[ingredient.name]) {
        delete updatedIngredients[ingredient.name];
      } else {
        updatedIngredients[ingredient.name] = true;
      }
      return updatedIngredients;
    });
  };

  return (
    <View>
      <View style={[styles.row, { marginBottom: 15 }]}>
        <Text style={styles.subtitle}>Agrega Ingredientes Extras</Text>
        <TouchableOpacity
          style={styles.icon}
          activeOpacity={0.7}
          onPress={handleToggleIngredients}
        >
          <Ionicons
            name={showIngredients ? 'chevron-down' : 'chevron-up'}
            size={28}
            color={theme.colors.blackMedium}
          />
        </TouchableOpacity>
      </View>

      {showIngredients && (
        <>
          {ingredientsList.map((ingredient) => (
            <View key={ingredient.id}>
              <View style={[styles.row, { paddingVertical: 5 }]}>
                <View style={[styles.box, { gap: 10, marginLeft: 10 }]}>
                  <Image
                    source={{ uri: ingredient.imageUri }}
                    style={{ width: 30, height: 30, borderRadius: 50 }}
                  />
                  <Text style={styles.text}>
                    {ingredient.label} {ingredient.precio}
                  </Text>
                </View>
                <CheckBox
                  checked={checkedIngredients[ingredient.name]}
                  onPress={() => handleToggleCheckbox(ingredient)}
                  checkedColor={'gray'}
                />
              </View>
              <Divider />
            </View>
          ))}
        </>
      )}
    </View>
  );
};

export default ExtraIngredients;
