import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import theme from '../../../../theme/theme';

const InputBtn = ({ icon, text, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.input}
      onPress={onPress}
    >
      <View style={styles.inputBox}>
        <MaterialIcons name={icon} size={24} color={theme.colors.primary} />
        <Text style={styles.inputText}>{text}</Text>
      </View>
      <MaterialIcons
        name='arrow-forward-ios'
        size={24}
        color={theme.colors.primary}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  input: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 0.2,
    borderColor: theme.colors.grey,
  },
  inputText: {
    color: 'rgba(0,0,0,0.6)',
    fontSize: theme.fontSize.lg,
  },
});

export default InputBtn;
