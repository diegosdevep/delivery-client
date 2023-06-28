import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

const Button = ({
  title,
  onPress,
  buttonStyle,
  titleStyle,
  disabled,
  type,
  raised,
  leftIcon,
  rightIcon,
  loading,
  loadingStyle,
  color,
}) => {
  const getButtonColor = () => {
    switch (color) {
      case 'primary':
        return '#2196F3';
      case 'secondary':
        return '#FF9800';
      case 'black':
        return '#000000';
      case 'blue':
        return '#0084FF';
      default:
        return '#2196F3';
    }
  };

  const renderIcon = (icon, position) => {
    if (!icon) {
      return null;
    }

    const { name, library } = icon;

    if (library === 'FontAwesome') {
      return <Icon name={name} color='#FFFFFF' style={styles.icon} />;
    }

    // Agrega aquí lógica adicional para otras bibliotecas de iconos

    return null;
  };

  const buttonColor = getButtonColor();

  const handlePress = () => {
    onPress();
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: buttonColor },
        buttonStyle,
        raised && styles.raisedButton,
        type === 'outline' && styles.outlineButton,
        type === 'clear' && styles.clearButton,
      ]}
      onPress={handlePress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator style={styles.loading} color='#FFFFFF' />
      ) : (
        <>
          {renderIcon(leftIcon, 'left')}
          <Text style={[styles.buttonText, titleStyle]}>{title}</Text>
          {renderIcon(rightIcon, 'right')}
        </>
      )}
    </TouchableOpacity>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  buttonStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['solid', 'outline', 'clear']),
  raised: PropTypes.bool,
  leftIcon: PropTypes.shape({
    name: PropTypes.string,
    library: PropTypes.string,
  }),
  rightIcon: PropTypes.shape({
    name: PropTypes.string,
    library: PropTypes.string,
  }),
  loading: PropTypes.bool,
  loadingStyle: PropTypes.object,
  color: PropTypes.oneOf(['primary', 'secondary', 'black', 'blue']),
};

Button.defaultProps = {
  buttonStyle: {},
  titleStyle: {},
  disabled: false,
  type: 'solid',
  raised: false,
  leftIcon: null,
  rightIcon: null,
  loading: false,
  loadingStyle: {},
  color: 'primary',
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  raisedButton: {
    elevation: 2,
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
  },
  clearButton: {
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  icon: {
    marginRight: 5,
  },
  loading: {
    marginRight: 5,
  },
});

export default Button;

// import { View, Text, StyleSheet } from 'react-native';
// import { styles } from './homeScreen.styles';
// import { useSelector } from 'react-redux';
// import Btn from './Btn';

// const HomeScreen = () => {
//   const handlePress = () => {
//     console.log('hola mundo');
//   };

//   return (
//     <View>
//       <Btn
//         title='Press Me'
//         onPress={handlePress}
//         buttonStyle={{ width: '80%' }}
//         titleStyle={styles.buttonText}
//         disabled={false}
//         type='solid'
//         raised={true}
//         color='black'
//         leftIcon={{ name: 'check', library: 'FontAwesome' }}
//         rightIcon={{ name: 'arrow-right', library: 'FontAwesome' }}
//         loading={false}
//         loadingStyle={styles.loading}
//       />
//     </View>
//   );
// };

// export default HomeScreen;
