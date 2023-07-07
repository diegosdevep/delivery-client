import { Ionicons, FontAwesome } from '@expo/vector-icons';
import theme from '../theme/theme';

export const iconOptions = {
  account: {
    default: (
      <Ionicons color={theme.colors.grey} size={24} name='person-outline' />
    ),
    focused: <Ionicons color={theme.colors.orange} size={24} name='person' />,
  },
  home: {
    default: (
      <Ionicons color={theme.colors.grey} size={24} name='home-outline' />
    ),
    focused: <Ionicons color={theme.colors.orange} size={24} name='home' />,
  },
  ticket: {
    default: (
      <FontAwesome color={theme.colors.grey} size={24} name='file-text-o' />
    ),
    focused: (
      <FontAwesome name='file-text' size={24} color={theme.colors.orange} />
    ),
  },
  carrito: {
    default: (
      <Ionicons color={theme.colors.grey} size={24} name='cart-outline' />
    ),
    focused: <Ionicons color={theme.colors.orange} size={24} name='cart' />,
  },
  faq: {
    default: (
      <FontAwesome
        name='question-circle-o'
        size={24}
        color={theme.colors.grey}
      />
    ),
    focused: (
      <FontAwesome
        name='question-circle'
        size={24}
        color={theme.colors.purple3}
      />
    ),
  },
};
